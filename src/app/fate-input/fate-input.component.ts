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
    <div [class]="'fate-edit-target ' + customClass" contenteditable="true" [innerHtml]="content"></div>
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

  public content: SafeHtml;
  private editTarget: any;

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
      // On blur we save the text Selection
      this.saveSelection();
    });

    this.editTarget.addEventListener('focus', (event: any) => {
      // On focus we restore it
      this.restoreSelection();
    });

    this.editTarget.addEventListener('input', (event: any) => {
      console.debug('value changed:', this.editTarget.innerHTML);
      if (this.editTarget.innerHTML === '') {
        this.editTarget.innerHTML = '<br>';
      }
      let tree = this.htmlParser.parseElement(this.editTarget);
      this.changed.forEach(f => f(this.parser.serialize(tree)));
    });
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
    let style:any = window.getComputedStyle(this.editTarget);
    this.editTarget.style.height = (parseInt(style.lineHeight, 10) * this.row + parseInt(style.paddingTop, 10) + parseInt(style.paddingBottom, 10)) + 'px';
  }

  private uiSubscription: Subscription;
  private subscribeToUi(uiId) {
    console.debug('subsciping to ' + uiId, this.uiSubscription);
    if (this.uiSubscription) {
      this.uiSubscription.unsubscribe();
    }
    this.uiSubscription = this.controller.channel(uiId).subscribe((command) => {
      console.debug('got command ' + command.name + '/' + command.value + ' on channel ' + uiId);
      this.editTarget.focus();
      document.execCommand(command.name, false, command.value);
    });
  }

  // Saves the current text selection
  private selectionRange: Range;
  private saveSelection() {
    console.debug('saveSelection');
    let sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      this.selectionRange =  sel.getRangeAt(0);
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

  // implentation of ControlValueAccessor:
  private changed = new Array<(value: string) => void>();

  public writeValue(value: string) {
    if (value) {
      this.content = this.sanitizer.bypassSecurityTrustHtml(this.htmlParser.serialize(this.parser.parse(value)));
    } else {
      this.content = '<br>';
    }
  }

  public registerOnChange(fn: (value: string) => void) {
    this.changed.push(fn);
  }

  public registerOnTouched(fn: () => void) {}
}
