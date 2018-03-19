import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FateDropdown } from '../fate-dropdown.interface';

@Component({
  selector: 'fate-link-dropdown',
  templateUrl: './fate-link-dropdown.component.html',
  styleUrls: ['./fate-link-dropdown.component.scss']
})
export class FateLinkDropdownComponent implements FateDropdown {

  @Input()
  public value: string;

  @Output()
  public valueChange = new EventEmitter<string>();

  public changeValue (value) {
    this.value = value;
    this.valueChange.emit(value);
  }
}
