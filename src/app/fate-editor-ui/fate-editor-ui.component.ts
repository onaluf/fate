import { Component, Input, OnInit } from '@angular/core';

import { FateControllerService } from '../fate-controller.service';

@Component({
  selector: 'fate-editor-ui',
  templateUrl: './fate-editor-ui.component.html',
  styleUrls: ['./fate-editor-ui.component.scss']
})
export class FateEditorUiComponent implements OnInit {

  @Input()
  public uiId: string = 'default';

  constructor(private controller: FateControllerService) { }

  ngOnInit() {
  }

  public do(event, command, value) {
    event.preventDefault();
    this.controller[command](value);
  }
}
