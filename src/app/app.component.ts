import { Component } from '@angular/core';

import { FateControllerService } from './fate.module';
import { ExampleMentionDropdownComponent } from './example-mention-dropdown/example-mention-dropdown.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  aboutFate = `<a class="repos custom-block" tabindex="0" contenteditable="false" href="https://github.com/onaluf/fate" title="Flexible Angular Text Editor"><i class="fab fa-github"></i> Fate</a> is a <strong>rich</strong> <em>text</em> <u>editor</u> (wysiwyg) natively written for angular (>= v2) in typescript with footprint and
  flexibility in mind. Its goal is to be very easy to customise and be as small as
  it can thanks to tree shaking.`;

  constructor(fateControllerService: FateControllerService) {
    fateControllerService.registerInlineAction(
      'mention',
      {
        command: 'insertHTML',
        display: 'contextual',
        name: 'Mention',
        regexp: /(@\w*)$/,
        matched: '',
        dropdown: ExampleMentionDropdownComponent
      }
    )
  }
}
