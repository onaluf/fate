import { Component, Input, ElementRef, HostListener, AfterContentInit, OnInit, OnChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Subscription } from 'rxjs/Subscription';

import { FateMarshalService } from '../fate-marshal.service';
import { FateControllerService } from '../fate-controller.service';
import { FateHtmlParserService } from '../fate-html-parser.service';

@Component({
  selector: 'fate-editor',
  templateUrl: './fate-editor.component.html',
  styleUrls: ['./fate-editor.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FateEditorComponent, multi: true}
  ],
})
export class FateEditorComponent implements ControlValueAccessor, AfterContentInit, OnChanges, OnInit {

  @Input()
  public uiId: string = 'default';

  public content: string = 'Hello World!';

  constructor(private el: ElementRef, private marshal: FateMarshalService, private controller: FateControllerService, private htmlParser: FateHtmlParserService) {}

  @HostListener('blur', ['$event'])
  public blur (event: any) {
    // On blur we save the text Selection
    this.saveSelection();
  }

  @HostListener('focus', ['$event'])
  public focus (event: any) {
    // On focus we restore it
    this.restoreSelection();
  }

  @HostListener('input', ['$event'])
  public valueChanged(event) {
    console.debug('value changed:', event.target.innerHTML);
    let tree = this.htmlParser.parseElement(event.target);
    console.debug('tree', tree);
    console.debug('marshalled:', this.marshal.save(tree));
    this.changed.forEach(f => f(this.marshal.save(tree)));
  };

  public ngOnInit() {
    this.subscribeToUi(this.uiId);
  }

  public ngAfterContentInit(){
    // Configure the Native element
    this.el.nativeElement.querySelector('.fate-editor').setAttribute('contenteditable', 'true');
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
      console.debug('got command ' + command + ' on channel ' + uiId);
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
    this.content = this.marshal.save(this.htmlParser.parse(this.innerValue));
  }

  public registerOnChange(fn: (value: string) => void) {
    this.changed.push(fn);
  }

  public registerOnTouched(fn: () => void) {}
}
