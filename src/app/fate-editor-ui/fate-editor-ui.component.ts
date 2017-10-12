import { Component, Input } from '@angular/core';

import { FateControllerService } from '../fate-controller.service';

@Component({
  selector: 'fate-editor-ui',
  templateUrl: './fate-editor-ui.component.html',
  styleUrls: ['./fate-editor-ui.component.scss']
})
export class FateEditorUiComponent {

  @Input()
  public uiId: string = 'default';

  constructor(private controller: FateControllerService) { }

  public do(event, command, value) {
    event.preventDefault();
    this.controller[command](this.uiId, value);
  }
}
