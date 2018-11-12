import { Component, Input, Output, EventEmitter } from '@angular/core';

import { FateDropdown } from '../fate.module';

@Component({
  selector: 'example-fate-mention-dropdown',
  templateUrl: './example-mention-dropdown.component.html',
  styleUrls: ['./example-mention-dropdown.component.scss']
})
export class ExampleMentionDropdownComponent implements FateDropdown {

  private _value: string;
  @Input()
  public set value(value) {
    this._value = value;
    this.filterList();
  }
  public get value() {
    return this._value;
  }

  @Output()
  public valueChange = new EventEmitter<string>();

  private reposList = [
    {
      name: 'Fate',
      description: 'Flexible Angular Text Editor',
      url: 'https://github.com/onaluf/fate'
    }, {
      name: 'ngLipsum',
      description: 'Simple Lorem Ipsum based dummy content generator directive and services for Angular',
      url: 'https://github.com/onaluf/ngLipsum'
    }, {
      name: 'RacerJS',
      description: 'A simple racing game inspired by the classic Lotus series on Amiga. This has been made for the 10k Apart contest (http://10k.aneventapart.com).',
      url: 'https://github.com/onaluf/RacerJS'
    }, {
      name: 'voxel',
      description: 'a voxel spacing demo done in javascript',
      url: 'https://github.com/onaluf/voxel'
    }, {
      name: 'gameQuery',
      description: 'a javascript game engine with jQuery',
      url: 'https://github.com/onaluf/gameQuery'
    }, {
      name: 'jQueryGameDevEssentials',
      description: 'This is the source code for the example of the book "jQuery Game Development Essentials" (http://jquerygamedevelopment.com/)',
      url: 'https://github.com/onaluf/jQueryGameDevEssentials'
    }
  ];

  public filteredList: Array<any>;
  private filterList() {
    this.filteredList = [];
    const criteria = this._value.substr(1);
    for (const repos of this.reposList) {
      if (repos.name.toLowerCase().indexOf(criteria.toLowerCase()) > -1) {
        this.filteredList.push(repos);
      }
    }
  }

  public changeValue (value) {
    this._value = value;
    this.valueChange.emit('<span class="repos custom-block" tabindex="0" contenteditable="false" data-href="' + value.url + '" title="' + value.description + '"><i class="fab fa-github"></i> ' + value.name + '</span>&nbsp;');
  }
}
