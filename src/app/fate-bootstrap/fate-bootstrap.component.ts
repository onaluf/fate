import { Component, HostListener } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { FateUiComponent } from '../fate-ui/fate-ui.component';
import { FateControllerService } from '../fate-controller.service';
import { FateParserService } from '../fate-parser.service';
import { FateIconService } from '../fate-icon.service';

let instanceCounter = 0;

@Component({
  selector: 'fate-bootstrap',
  templateUrl: './fate-bootstrap.component.html',
  styleUrls: ['./fate-bootstrap.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: FateBootstrapComponent, multi: true}
  ],
})
export class FateBootstrapComponent extends FateUiComponent implements ControlValueAccessor {

  // implentation of ControlValueAccessor:
  private changed = new Array<(value: string) => void>();
  private clickOngoing: boolean = false;

  public passthrough: string;
  public uiId;
  public uiVisible;

  @HostListener('focusout', ['$event'])
  public blur (event: any) {
    if (!this.clickOngoing) {
      this.uiVisible = false;
    }
  }

  @HostListener('mousedown', ['$event'])
  public mousedown (event: any) {
    this.clickOngoing = true;
  }

  @HostListener('mouseup', ['$event'])
  public mouseup (event: any) {
    this.clickOngoing = false;
  }

  @HostListener('focusin', ['$event'])
  public focus (event: any) {
    this.uiVisible = true;
  }

  constructor(controller: FateControllerService, parser: FateParserService, icon: FateIconService) {
    super(controller, icon, parser);
    this.uiId = 'bootstrap-' + (instanceCounter++);
  }

  public writeValue(value: string) {
    this.passthrough = value;
  }

  public registerOnChange(fn: (value: string) => void) {
    this.changed.push(fn);
  }

  public registerOnTouched(fn: () => void) {}

  // change callback
  public onChange(value) {
    this.passthrough = value;
    this.changed.forEach(f => f(value));
  }
}
