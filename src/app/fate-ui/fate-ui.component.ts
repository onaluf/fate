import { Component, Input, HostListener, OnChanges } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { FateControllerService } from '../fate-controller.service';
import { FateParserService } from '../fate-parser.service';
import { FateIconService } from '../fate-icon.service';

@Component({
  selector: 'fate-ui',
  templateUrl: './fate-ui.component.html',
  styleUrls: ['./fate-ui.component.scss']
})
export class FateUiComponent implements OnChanges {

  @Input()
  public uiId: string = 'default';

  @Input()
  public buttons: Array<string> = [
    'bold',
    'italic',
    'underline',
    'strike',
    'separator',
    'subscript',
    'superscript',
    'separator',
    'heading1',
    'heading2',
    'heading3',
    'heading4',
    'heading5',
    'heading6',
    'normal',
    'separator',
    'indent',
    'outdent',
    'ordered',
    'unordered',
    'separator',
    'center',
    'justify',
    'left',
    'right',
    'separator',
    'undo',
    'redo',
    'clean'
  ];

  public enabled: Array<string> = [];

  private inputSubscription: Subscription;

  constructor(public controller: FateControllerService, public icon: FateIconService, private parser: FateParserService) { }

  @HostListener('mousedown', ['$event'])
  public mouseDown(event) {
    event.preventDefault();
  }

  public do(event, action) {
    event.preventDefault();
    this.controller.do(this.uiId, action);
  }

  public ngOnChanges(changes) {
    if (changes['uiId']) {
      if (this.inputSubscription) {
        this.inputSubscription.unsubscribe();
      }
      this.inputSubscription = this.controller.enabled(this.uiId).subscribe((actions) => {
        this.enabled = actions;
      });
    }
  }
}
