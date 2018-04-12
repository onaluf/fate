import { Component, Input, ElementRef, OnInit, OnChanges, AfterViewInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Subscription } from 'rxjs/Subscription';

import { FateControllerService } from '../fate-controller.service';
import { FateHtmlParserService } from '../fate-html-parser.service';
import { FateParserService } from '../fate-parser.service';

@Component({
  selector: 'fate-input',
  template: `
    <div [class]="'fate-edit-target ' + customClass" [ngClass]="{empty: empty}" contenteditable="true" [title]="placeholder" [innerHtml]="content"></div>
  `,
  styles: [`
    :host div.fate-edit-target {
      display: block;
      padding: 10px;
      border: 1px solid #DDD;
      outline: 0;
      margin-bottom: 10px;
      resize: vertical;
      overflow: auto;
      background: #FFF;
      color: #000;
      overflow: visible;
    }
    :host div.fate-edit-target.empty:not(:focus):before {
      content:attr(title);
      color: #636c72;
    }
  `],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FateInputComponent, multi: true}
  ],
})
export class FateInputComponent implements ControlValueAccessor, OnChanges, OnInit, AfterViewInit {

  @Input()
  public uiId: string = 'default';

  @Input()
  public row: number;

  @Input()
  public customClass: string;

  @Input()
  public placeholder: string = '';

  public content: SafeHtml;
  public empty: boolean = true;
  private editTarget: any;
  private isFocused: boolean = false;

  constructor(private el: ElementRef, private controller: FateControllerService, private htmlParser: FateHtmlParserService, private parser: FateParserService, private sanitizer: DomSanitizer) {}

  public ngOnInit() {
    this.subscribeToUi(this.uiId);
  }

  public ngAfterViewInit() {
    this.editTarget = this.el.nativeElement.querySelector('.fate-edit-target');
    if (this.row) {
      this.computeHeight();
    }

    this.editTarget.addEventListener('click', (event: any) => {
      console.debug('click');
      // On click we save the text Selection
      this.saveSelection();
    });

    this.editTarget.addEventListener('keypress', (event: any) => {
      console.debug('keypressed');
      // On click we save the text Selection
      this.saveSelection();
    });

    this.editTarget.addEventListener('focus', (event: any) => {
      console.debug('focus');
      // On focus we restore it
      this.restoreSelection();
      this.isFocused = true;
    });
    this.editTarget.addEventListener('blur', (event: any) => {
      console.debug('blur');
      this.isFocused = false;
    });

    this.editTarget.addEventListener('keydown', (event: any) => {
      console.info('keydown?', event);
      // This is needed because, if the current selection is part
      // of a non-editable child of the input, the default delete won't
      // work.
      // This case can happen if there is a cutom element that
      // was inserted by some custom controller.
      //
      // Some constraints for a custom block to work on top of contenteditable=false:
      // -moz-user-select: none;
      // -webkit-user-modify: read-only;
      //
      // Note: It may make sense to delete the selection for normal text
      // input too but for now we only do it on deletion.
      if (event.key === "Backspace" || event.key === "Delete") {
        let node = this.selectionRange.commonAncestorContainer;
        console.info('Deletion', node);
        if (node instanceof HTMLElement && !(node as HTMLElement).isContentEditable) {
          // this is the case on firefox
          console.debug('deleting inside un-editable block detected');
          event.preventDefault();
          this.selectionRange.selectNode(node);
          this.selectionRange.deleteContents();
          let tree = this.htmlParser.parseElement(this.editTarget);
          this.changed.forEach(f => f(this.parser.serialize(tree)));
        } else if (node.nodeName === '#text' && !node.parentElement.isContentEditable) {
          // this is the case on webkit
          console.debug('deleting inside un-editable block detected');
          event.preventDefault();
          this.selectionRange.selectNode(node.parentElement);
          this.selectionRange.deleteContents();
          let tree = this.htmlParser.parseElement(this.editTarget);
          this.changed.forEach(f => f(this.parser.serialize(tree)));
        }
      }
    });

    this.editTarget.addEventListener('input', (event: any) => {
      console.debug('value changed');
      if (this.editTarget.innerHTML === '') {
        this.editTarget.innerHTML = '<br>';
        this.empty = true;
      } else if (this.editTarget.innerHTML === '<br>') {
        this.empty = true;
      } else {
        this.empty = false;
      }
      let tree = this.htmlParser.parseElement(this.editTarget);
      this.changed.forEach(f => f(this.parser.serialize(tree)));
    });
    let style: any = window.getComputedStyle(this.editTarget);
    this.editTarget.style.minHeight = this.getHeight(2);
  }

  public ngOnChanges(changes) {
    if (changes['uiId']) {
      this.subscribeToUi(this.uiId);
    }
    if (changes['row']) {
      if (this.editTarget) {
        this.computeHeight();
      }
    }
  }

  private computeHeight() {
    this.editTarget.style.height = this.getHeight(this.row);
  }

  private getHeight(rowCount) {
    let style:any = window.getComputedStyle(this.editTarget);
    let height = this.editTarget.style.height = (parseInt(style.lineHeight, 10) * rowCount);
    if (style.boxSizing === 'border-box') {
      height += parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10) + parseInt(style.borderTopWidth, 10) + parseInt(style.borderBottomWidth, 10);
    }
    return height + 'px';
  }

  private uiSubscription: Subscription;
  private subscribeToUi(uiId) {
    console.debug('subscribing to ' + uiId, this.uiSubscription);
    if (this.uiSubscription) {
      this.uiSubscription.unsubscribe();
    }
    this.uiSubscription = this.controller.channel(uiId).subscribe((command) => {
      // if input is not on focus we save current focus:
      let focus = document.activeElement;
      console.debug('got command ' + command.name + '/' + command.value + ' on channel ' + uiId);

      this.editTarget.focus();
      if (command.name === 'insertHTML') {
        // insertHtml seems quite broken so we do it ourseleves
        this.selectionRange.insertNode(document.createRange().createContextualFragment(command.value));
        // move cusor to the end of the newly inserted element
        this.selectionRange.collapse(false);
        // Force the update of the model
        let tree = this.htmlParser.parseElement(this.editTarget);
        this.changed.forEach(f => f(this.parser.serialize(tree)));
      } else {
        document.execCommand(command.name, false, command.value);
      }
      this.saveSelection();
      (focus as any).focus();
    });
  }

  // Saves the current text selection
  private selectionRange: Range;
  private saveSelection() {
    let sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      this.selectionRange =  sel.getRangeAt(0);
      console.debug('saveSelection', this.selectionRange);
      this.detectStyle();
    }
  }
  // Restors the current text selection
  private restoreSelection() {
    console.debug('restoreSelection', this.selectionRange);
    if(this.selectionRange) {
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(this.selectionRange);
    }
  }

  private detectStyle() {
    let node = this.selectionRange.commonAncestorContainer;
    if (!node || (!(node.parentElement.closest('.fate-edit-target') && node !== this.editTarget))) {
      // The current selection is not contained in the editable zone.
      // this is most likely due to the input being empty.
      return;
    }
    // special cases for FF when selection is obtained by double click:
    if ((this.selectionRange.endOffset === 0) &&
        (this.selectionRange.startContainer.nodeValue) &&
        (this.selectionRange.startOffset === this.selectionRange.startContainer.nodeValue.length)) {
      node = this.selectionRange.startContainer.nextSibling;
    } else if ((this.selectionRange.endOffset === 0) &&
        (this.selectionRange.startOffset === 0)) {
      node = this.selectionRange.startContainer.parentElement;
    } else if ((this.selectionRange.commonAncestorContainer === this.editTarget) &&
               (this.selectionRange.startContainer === this.editTarget) &&
               (this.selectionRange.endContainer === this.editTarget)) {
      node = this.selectionRange.commonAncestorContainer.childNodes[this.selectionRange.startOffset];
    }
    if (node && node !== this.editTarget) {
      let nodes = this.htmlParser.findParentNodes(node, this.editTarget);
      console.debug('  -> detected actions: ', nodes);
      this.controller.enableActions(this.uiId, nodes);
    }
  }

  // implentation of ControlValueAccessor:
  private changed = new Array<(value: string) => void>();

  public writeValue(value: string) {
    if (value) {
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.htmlParser.serialize(this.parser.parse(value)));
      this.empty = false;
    } else {
      this.content = this.sanitizer.bypassSecurityTrustHtml('<br>');
      this.empty = true;
    }
    this.selectionRange = undefined;
  }

  public registerOnChange(fn: (value: string) => void) {
    this.changed.push(fn);
  }

  public registerOnTouched(fn: () => void) {}
}
