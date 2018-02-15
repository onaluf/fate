import { Component, Input, ElementRef, HostListener, OnInit, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { FateControllerService } from '../fate-controller.service';
import { FateHtmlParserService } from '../fate-html-parser.service';
import { FateParserService } from '../fate-parser.service';

@Component({
  selector: 'fate-input',
  host: {
    '[innerHtml]': 'content',
    'contenteditable': 'true'
  },
  template: '',
  styles: [`
    :host {
      display: block;
      padding: 10px;
      border: 1px solid #DDD;
      outline: 0;
      margin-bottom: 10px;
      resize: vertical;
      overflow: auto;
    }
  `],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FateInputComponent, multi: true}
  ],
})
export class FateInputComponent implements ControlValueAccessor, OnChanges, OnInit {

  @Input()
  public uiId: string = 'default';

  public content: string = 'Hello World!';

  constructor(private el: ElementRef, private controller: FateControllerService, private htmlParser: FateHtmlParserService, private parser: FateParserService) {}

  @HostListener('blur', ['$event'])
  public blur (event: any) {
    // On blur we save the text Selection
    console.debug('saveSelection');
    this.saveSelection();
  }

  @HostListener('focus', ['$event'])
  public focus (event: any) {
    // On focus we restore it
    console.debug('restoreSelection');
    this.restoreSelection();
  }

  @HostListener('input', ['$event'])
  public valueChanged(event) {
    console.debug('value changed:', event.target.innerHTML);
    let tree = this.htmlParser.parseElement(event.target);
    console.debug('tree', tree);
    this.changed.forEach(f => f(this.parser.serialize(tree)));
  };

  public ngOnInit() {
    this.subscribeToUi(this.uiId);
  }

  public ngOnChanges(changes) {
    if (changes['uiId']) {
      this.subscribeToUi(this.uiId);
    }
  }

  private uiSubscription: Subscription;
  private subscribeToUi(uiId) {
    console.debug('subsciping to ' + uiId, this.uiSubscription);
    if (this.uiSubscription) {
      this.uiSubscription.unsubscribe();
    }
    this.uiSubscription = this.controller.channel(uiId).subscribe((command) => {
      console.debug('got command ' + command.name + '/' + command.value + ' on channel ' + uiId);
      this.el.nativeElement.focus();
      document.execCommand(command.name, false, command.value);
    });
  }

  // Saves the current text selection
  private selectionRange: Range;
  private saveSelection() {
    let sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      console.debug('Saving range: ', sel.getRangeAt(0));
      this.selectionRange = sel.getRangeAt(0);
    }
  }
  // Restors the current text selection
  private restoreSelection() {
    if(this.selectionRange) {
      let sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(this.selectionRange);
    }
  }

  // implentation of ControlValueAccessor:
  private innerValue: string;
  private changed = new Array<(value: string) => void>();

  public writeValue(value: string) {
    this.innerValue = value;
    if (value) {
      this.content = this.htmlParser.serialize(this.parser.parse(this.innerValue));
    } else {
      this.content = '';
    }
  }

  public registerOnChange(fn: (value: string) => void) {
    this.changed.push(fn);
  }

  public registerOnTouched(fn: () => void) {}
}
