import { Component, Input } from '@angular/core';

import { FateControllerService } from '../fate-controller.service';
import { FateParserService } from '../fate-parser.service';
import { FateIconService } from '../fate-icon.service';

@Component({
  selector: 'fate-ui',
  templateUrl: './fate-ui.component.html',
  styleUrls: ['./fate-ui.component.scss']
})
export class FateUiComponent {

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

  constructor(private controller: FateControllerService, public icon: FateIconService, public parser: FateParserService) { }

  public do(event, command, value) {
    event.preventDefault();
    this.controller[command](this.uiId, value);
  }
}
