import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  aboutFate = `Fate is a <strong>rich</strong> <em>text</em> <u>editor</u> (wysiwyg) natively written for angular (>= v2) in typescript with footprint and
  flexibility in mind. Its goal is to be very easy to customise and be as small as
  it can thanks to tree shaking.`;
}
