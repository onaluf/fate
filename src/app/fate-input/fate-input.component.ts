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

    this.editTarget.addEventListener('input', (event: any) => {
      console.debug('input');
      console.debug('value changed:', this.editTarget.innerHTML);
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
    let style:any = window.getComputedStyle(this.editTarget);
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
      document.execCommand(command.name, false, command.value);
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
