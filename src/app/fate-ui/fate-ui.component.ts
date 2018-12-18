import { Component, Input, ElementRef, HostListener, OnChanges, AfterViewInit, ComponentFactoryResolver, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';

import { Subscription } from 'rxjs';

import { FateControllerService } from '../fate-controller.service';
import { FateParserService } from '../fate-parser.service';
import { FateIconService } from '../fate-icon.service';
import { FateDropdown } from '../fate-dropdown.interface';

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
  protected dropdownComponent: ViewRef;

  protected inputSubscription: Subscription;

  constructor(protected el: ElementRef, public controller: FateControllerService, public icon: FateIconService, protected parser: FateParserService, protected factoryResolver: ComponentFactoryResolver) { }

  @HostListener('mousedown', ['$event'])
  public mouseDown(event) {
    if (!event.target.closest('.fate-ui-dropdown')) {
      event.preventDefault();
    }
  }

  @ViewChild('dropdown', {
    read: ViewContainerRef
  })
  viewContainerRef: ViewContainerRef

  public do(event, action) {
    event.preventDefault();
    event.stopPropagation();
    if (this.controller.getAction(action).dropdown) {
      if (action === this.dropdownAction) {
        this.dropdownAction = false;
      } else {
        let button = event.target;
        if (!button.classList.contains('fate-ui-button')) {
          button = button.closest('.fate-ui-button');
        }
        const dropdown =  this.el.nativeElement.querySelector('.fate-ui-dropdown');

        // Enable the dropdown

        this.dropdownValue = this.enabled[action];
        console.debug('action has value', button, dropdown, this.dropdownValue);
        this.initDropdown(this.controller.getAction(action).dropdown, this.dropdownValue);

        // Postion the dropdown
        setTimeout(() => {
          const buttonSize = button.getBoundingClientRect();
          const dropdownSize =  dropdown.getBoundingClientRect();
          let leftPosition = button.offsetLeft + (buttonSize.width / 2) - (dropdownSize.width / 2);
          // make sure the dropdown is not bleeding out of the viewport
          if (buttonSize.left + window.pageXOffset + (buttonSize.width / 2) - (dropdownSize.width / 2) < 3) {
            leftPosition = - buttonSize.left - window.pageXOffset + button.offsetLeft + 3;
          } else if (buttonSize.left + window.pageXOffset + (buttonSize.width / 2) + (dropdownSize.width / 2) > window.innerWidth - 3) {
            leftPosition = window.innerWidth - buttonSize.left - window.pageXOffset + button.offsetLeft - dropdownSize.width - 3;
          }
          const topPosition = button.offsetTop + buttonSize.height - 3;
          dropdown.style.left = leftPosition + 'px';
          dropdown.style.top = topPosition + 'px';
          // make the dropdown visible
          this.dropdownAction = action;
        }, 0);
      }
    } else {
      this.dropdownAction = false;
      this.controller.do(this.uiId, action);
    }
  }

  protected getOffset(element) {
    let top = 0;
    let left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while (element);

    return {
        top: top,
        left: left
    };
  }

  protected initDropdown(actionComponent, value) {
    if (this.dropdownComponent) {
      this.dropdownComponent.destroy();
    }
    const factory = this.factoryResolver.resolveComponentFactory(actionComponent);
    const component: any = factory.create(this.viewContainerRef.parentInjector);
    if (component.instance.valueChange) {
      component.instance.value = value;
      component.instance.valueChange.subscribe((newValue) => {
        this.dropdownValue = newValue;
        this.controller.do(this.uiId, this.dropdownAction, newValue);
      });
      this.dropdownComponent = this.viewContainerRef.insert(component.hostView);
    } else {
      throw new Error('The component used as a dropdown doesn\'t contain a valueChange emmiter!');
    }
  }

  public ngOnChanges(changes) {
    if (changes['uiId']) {
      if (this.inputSubscription) {
        this.inputSubscription.unsubscribe();
      }
      this.inputSubscription = this.controller.enabled(this.uiId).subscribe((actions: any) => {
        this.enabled = {};
        for (const action of actions) {
          this.enabled[action.action] = action.value || true;
        }
      });
    }
  }

  public ngAfterViewInit() {
    const handle = document.body.addEventListener('click', (event) => {
      if (!(event.target as Element).closest('.fate-ui-dropdown')) {
        this.dropdownAction = false;
      }
    });
  }
}
