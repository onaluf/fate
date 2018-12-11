import { Component, Input, ViewChild, ElementRef, ViewRef, ViewContainerRef, ComponentFactoryResolver, OnInit, OnChanges, AfterViewInit, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { Subscription } from 'rxjs';

import { FateControllerService } from '../fate-controller.service';
import { FateHtmlParserService } from '../fate-html-parser.service';
import { FateParserService } from '../fate-parser.service';

@Component({
  selector: 'fate-input',
  template: `
    <div class="fate-inline-dropdown"
         [class.hidden]="!inlineAction"
         [class.contextual]="inlineAction?.display === 'contextual'"
         [style.top]="dropdownPostionTop"
         [style.left]="dropdownPostionLeft">
      <ng-template #dropdown></ng-template>
    </div>
    <div [class]="'fate-edit-target ' + customClass"
         [ngClass]="{empty: empty}"
         contenteditable="true"
         [title]="placeholder"
         [innerHtml]="content"></div>
  `,
  styles: [`
    :host div.fate-edit-target {
      display: block;
      padding: 10px;
      border: 1px solid #DDD;
      outline: 0;
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
    .fate-inline-dropdown {
      border: 1px solid #DDD;
      border-bottom: 0;
    }
    .fate-inline-dropdown.hidden {
      display: none !important;
    }
    .fate-inline-dropdown.contextual {
      position: absolute;
      background: #FFF;
      box-shadow: 0 5px 30px -10px rgba(0,0,0,0.4);
      border-bottom: 1px solid #CCC;
    }
    :host {
      margin-bottom: 10px;
      /*position: relative;*/
    }
  `],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FateInputComponent, multi: true}
  ],
})
export class FateInputComponent implements ControlValueAccessor, OnChanges, OnInit, AfterViewInit, OnDestroy {

  @Input()
  public uiId: string = 'default';

  @Input()
  public row: number;

  @Input()
  public customClass: string;

  @Input()
  public placeholder: string = '';

  @ViewChild('dropdown', {
    read: ViewContainerRef
  })
  viewContainerRef: ViewContainerRef
  private dropdownComponent: ViewRef;
  private dropdownInstance: any;
  public dropdownPostionTop: string;
  public dropdownPostionLeft: string;
  public inlineAction: any;

  public content: SafeHtml;
  public empty: boolean = true;
  private editTarget: any;
  private isFocused: boolean = false;

  constructor(private el: ElementRef, private controller: FateControllerService, private htmlParser: FateHtmlParserService, private parser: FateParserService, private sanitizer: DomSanitizer, private factoryResolver: ComponentFactoryResolver) {}

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
      // We check if there is a dropdown matching this context
      this.checkForDropdownContext();
    });

    this.editTarget.addEventListener('keyup', (event: any) => {
      console.debug('keypressed');
      // On click we save the text Selection
      this.saveSelection();
      // We check if there is a dropdown matching this context
      this.checkForDropdownContext();
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
      this.saveSelection();

      if (this.dropdownComponent) {
        setTimeout(() => {
          this.inlineAction = null;
          this.dropdownComponent.destroy();
        }, 300);
        // this.inlineAction = null;
        // this.dropdownComponent.destroy();
      }
    });

    this.editTarget.addEventListener('keydown', (event: any) => {
      console.debug('keydown', event);
      const stopDefault = () => {
        event.preventDefault();
        event.stopPropagation();
      }
      const stopDefaultAndForceUpdate = () => {
        stopDefault();
        this.checkEmpty();
        const tree = this.htmlParser.parseElement(this.editTarget);
        this.changed.forEach(f => f(this.parser.serialize(tree)));
      }
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
      if (event.key === 'Backspace' || event.key === 'Delete' && this.selectionRange) {
        const node = this.selectionRange.commonAncestorContainer;
        console.debug('Deletion', node);
        if (node instanceof HTMLElement && !(node as HTMLElement).isContentEditable) {
          // this is the case on firefox
          console.debug('deleting inside un-editable block detected');
          this.selectionRange.selectNode(node);
          this.selectionRange.deleteContents();
          stopDefaultAndForceUpdate();
        } else if (node.nodeName === '#text' && !node.parentElement.isContentEditable) {
          // this is the case on webkit
          console.debug('deleting inside un-editable block detected');
          this.selectionRange.selectNode(node.parentElement);
          this.selectionRange.deleteContents();
          stopDefaultAndForceUpdate();
        }
      }
      // This is needed because, there is a bug in Firefox that prevent
      // deleting a uneditable element inside an editable element. So we
      // reimplement the whole function for all browsers.
      if (event.key === 'Backspace' && this.selectionRange) {
        const node = this.selectionRange.commonAncestorContainer;
        if (this.selectionRange.collapsed === true &&
            this.selectionRange.startOffset === 0 &&
            node.previousSibling instanceof HTMLElement &&
            !(node.previousSibling as HTMLElement).isContentEditable ) {
          node.previousSibling.remove();
          stopDefaultAndForceUpdate();
        }
      } else if (event.key === 'Delete' && this.selectionRange) {
        const node = this.selectionRange.commonAncestorContainer;
        if (this.selectionRange.collapsed === true &&
            this.selectionRange.endContainer.nodeName === '#text' &&
            this.selectionRange.endOffset === (this.selectionRange.endContainer as Text).length &&
            node.nextSibling instanceof HTMLElement &&
            !(node.nextSibling as HTMLElement).isContentEditable ) {
          node.nextSibling.remove();
          stopDefaultAndForceUpdate();
        }
      }
      // If a dropdown is currently being displayed we use the up/down
      // key to navigate its content and return to select the selected
      // element
      if (this.inlineAction) {
        if (event.key === 'Up' || event.key === 'ArrowUp') {
          stopDefault();
          this.dropdownInstance.selecPrevious();
        } else if (event.key === 'Down' || event.key === 'ArrowDown') {
          stopDefault();
          this.dropdownInstance.selectNext();
        } else if (event.key === 'Enter') {
          stopDefault();
          this.dropdownInstance.confirmSelection();
        }
      }
    });

    this.editTarget.addEventListener('input', (event: any) => {
      console.debug('value changed');
      this.checkEmpty();
      const tree = this.htmlParser.parseElement(this.editTarget);
      this.changed.forEach(f => f(this.parser.serialize(tree)));
    });
    const style: any = window.getComputedStyle(this.editTarget);
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

  public ngOnDestroy() {
    if (this.uiSubscription) {
      this.uiSubscription.unsubscribe();
    }
  }

  private computeHeight() {
    this.editTarget.style.height = this.getHeight(this.row);
  }

  private checkEmpty() {
    if (this.editTarget.innerHTML === '') {
      this.editTarget.innerHTML = '<br>';
      this.empty = true;
    } else if (this.editTarget.innerHTML === '<br>') {
      this.empty = true;
    } else {
      this.empty = false;
    }
  }

  private getHeight(rowCount) {
    const style: any = window.getComputedStyle(this.editTarget);
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
      const focus = document.activeElement;
      console.debug('got command ' + command.name + '/' + command.value + ' on channel ' + uiId);

      this.editTarget.focus();
      this.restoreSelection();
      if (command.name === 'insertHTML' && this.selectionRange) {
        // If something is selected we assume that the goal is to replace it,
        // so first we delete the content
        this.selectionRange.deleteContents();
        // insertHtml seems quite broken so we do it ourseleves
        this.selectionRange.insertNode(document.createRange().createContextualFragment(command.value));
        // move cusor to the end of the newly inserted element
        this.selectionRange.collapse(false);
        // Force the update of the model
        this.checkEmpty();
        const tree = this.htmlParser.parseElement(this.editTarget);
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
    const sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      this.selectionRange =  sel.getRangeAt(0);
      console.debug('saveSelection', this.selectionRange);
      this.detectStyle();
    }
  }
  // Restors the current text selection
  private restoreSelection() {
    if (this.selectionInEditableTarget()) {
      this.saveSelection();
    }
    console.debug('restoreSelection', this.selectionRange);
    if (this.selectionRange) {
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(this.selectionRange);
    }
  }

  private selectionInEditableTarget() {
    const node = this.selectionRange && this.selectionRange.commonAncestorContainer;
    return node && (node.parentElement.closest('.fate-edit-target') && node !== this.editTarget);
  }

  private detectStyle() {
    let node = this.selectionRange.commonAncestorContainer;
    if (!this.selectionInEditableTarget()) {
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
      const nodes = this.htmlParser.findParentNodes(node, this.editTarget);
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

  private checkForDropdownContext() {
    const startPos = Math.max(this.selectionRange.startOffset - 20, 0);
    const length = this.selectionRange.startOffset - startPos;
    const context = this.selectionRange.startContainer.textContent.substr(startPos, length);

    const inlineAction = this.controller.getInlineAction(context);
    if (inlineAction) {
      if (!this.inlineAction || this.inlineAction.dropdown !== inlineAction.dropdown) {
        this.inlineAction = inlineAction;
        this.initDropdown(inlineAction, this.selectionRange.getBoundingClientRect());
      } else {
        this.inlineAction = inlineAction;
        this.updateDropdown(inlineAction.matched);
      }
    } else if (this.dropdownComponent) {
      this.inlineAction = null;
      this.dropdownComponent.destroy();
    }
  }

  private initDropdown(actionComponent, position) {
    // set the dropdown component
    if (this.dropdownComponent) {
      this.dropdownComponent.destroy();
    }
    const factory = this.factoryResolver.resolveComponentFactory(actionComponent.dropdown);
    const component: any = factory.create(this.viewContainerRef.parentInjector);
    if (component.instance.valueChange) {
      component.instance.value = actionComponent.matched;
      component.instance.valueChange.subscribe((value) => {
        this.editTarget.focus();
        const end = this.selectionRange.endOffset;
        this.selectionRange.setStart(this.selectionRange.endContainer, end - actionComponent.matched.length);
        this.controller.doInline(this.uiId, this.inlineAction, value);
        // delete the dropdown
        this.inlineAction = null;
        this.dropdownComponent.destroy();
      });
      this.dropdownComponent = this.viewContainerRef.insert(component.hostView);
      this.dropdownInstance = component.instance;
      this.updateDropdownPosition();
    } else {
      throw new Error('The component used as a dropdown doesn\'t contain a valueChange emmiter!');
    }
  }

  private updateDropdown(value) {
    this.dropdownInstance.value = value;
    this.updateDropdownPosition();
  }

  private updateDropdownPosition() {
    if (this.inlineAction.display === 'contextual') {
      // create a selection to get the size of the matching text
      const parentOffsetBB = this.el.nativeElement.offsetParent.getBoundingClientRect();
      const range = this.selectionRange.cloneRange();
      const end = range.endOffset;
      range.setStart(range.endContainer, end - this.inlineAction.matched.length);
      const boundingBox = range.getBoundingClientRect();
      this.dropdownPostionTop = (boundingBox.top + boundingBox.height - parentOffsetBB.top) + 'px';
      this.dropdownPostionLeft = (boundingBox.left - parentOffsetBB.left) + 'px';
    }
  }
}
