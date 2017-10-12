import { Directive, Input, ElementRef, HostListener, AfterContentInit } from '@angular/core';

import { FateMarshalService } from './fate-marshal.service';
import { FateControllerService } from './fate-controller.service';
import { FateHtmlParserService } from './fate-html-parser.service';

@Directive({
  selector: '[fateEditor]'
})
export class FateEditorDirective implements AfterContentInit {

  @Input()
  public forUI: string = 'default';

  public value: string = 'Hello World!';

  constructor(private el: ElementRef, private marshal: FateMarshalService, private controller: FateControllerService, private htmlParser: FateHtmlParserService) {
    controller.commands.subscribe((command) => {
      el.nativeElement.focus();
      // React to command comming form the UI through the controller service
      /* if (command.name === 'removeFormat') {
        // Unwrap currently selected element to handle special cases like headers
        let currentSelection = window.getSelection();
        let parentElement = currentSelection.anchorNode.parentElement;
        if (parentElement) {
          switch (parentElement.nodeName) {
            case 'H1':
            case 'H2':
            case 'H3':
            case 'H4':
            case 'H5':
            case 'H6':
              currentSelection.anchorNode.parentElement = parent.parentElement;
          }
        }
      } */
      document.execCommand(command.name, false, command.value);
    });
    //insertBrOnReturn ? How does that work???
  }

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
    console.info('value changed:', event.target.innerHTML);
    let tree = this.htmlParser.parseElement(event.target);
    console.info('tree', tree);
    console.info('marshalled:', this.marshal.save(tree));
  };

  ngAfterContentInit(){
    // Configure the Native element
    this.el.nativeElement.setAttribute('contenteditable', 'true');
  }

  // Saves the current text selection
  private selectionRange: Range;
  private saveSelection() {
    let sel = window.getSelection();
    if (sel.getRangeAt && sel.rangeCount) {
      console.info('Saving range: ', sel.getRangeAt(0));
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
}
