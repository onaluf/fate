import { Component, Input, ElementRef, HostListener, OnChanges, AfterViewInit } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { FateControllerService } from '../fate-controller.service';
import { FateParserService } from '../fate-parser.service';
import { FateIconService } from '../fate-icon.service';

@Component({
  selector: 'fate-ui',
  templateUrl: './fate-ui.component.html',
  styleUrls: ['./fate-ui.component.scss']
})
export class FateUiComponent implements OnChanges, AfterViewInit {

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
    'link',
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

  public enabled: any = {};
  public dropdownAction: boolean | string = false;
  public dropdownValue: string;

  private inputSubscription: Subscription;

  constructor(private el: ElementRef, public controller: FateControllerService, public icon: FateIconService, private parser: FateParserService) { }

  @HostListener('mousedown', ['$event'])
  public mouseDown(event) {
    if (!event.target.closest('.fate-ui-dropdown')) {
      event.preventDefault();
    }
  }

  public do(event, action) {
    event.preventDefault();
    event.stopPropagation();
    if (this.controller.getAction(action).hasValue) {
      if (action === this.dropdownAction) {
        this.dropdownAction = false;
      } else {
        let button = event.target;
        if (!button.classList.contains('fate-ui-button')) {
          button = button.closest('.fate-ui-button');
        }
        let dropdown =  this.el.nativeElement.querySelector('.fate-ui-dropdown');

        // Enable the dropdown
        this.dropdownAction = action;
        this.dropdownValue = this.enabled[action];
        console.debug('action has value', button, dropdown);

        // Postion the dropdown
        setTimeout(() => {
          let buttonSize = button.getBoundingClientRect();
          let dropdownSize =  dropdown.getBoundingClientRect();
          let leftPosition = button.offsetLeft + (buttonSize.width / 2) - (dropdownSize.width / 2);
          if (leftPosition < 3) {
            leftPosition = 3;
          }
          let topPosition = button.offsetTop + buttonSize.height - 3;
          dropdown.style.left = leftPosition + 'px';
          dropdown.style.top = topPosition + 'px';
        }, 0);
      }
    } else {
      this.dropdownAction = false;
      this.controller.do(this.uiId, action);
    }
  }

  public dropdownValueChange(value) {
    this.dropdownValue = value;
    this.controller.do(this.uiId, this.dropdownAction, value);
  }

  public ngOnChanges(changes) {
    if (changes['uiId']) {
      if (this.inputSubscription) {
        this.inputSubscription.unsubscribe();
      }
      this.inputSubscription = this.controller.enabled(this.uiId).subscribe((actions: any) => {
        this.enabled = {};
        for (let action of actions) {
          this.enabled[action.action] = action.value || true;
        }
      });
    }
  }

  public ngAfterViewInit() {
    let handle = document.body.addEventListener('click', (event) => {
      if (!(event.target as Element).closest('.fate-ui-dropdown')) {
        this.dropdownAction = false;
      }
    });
  }
}
