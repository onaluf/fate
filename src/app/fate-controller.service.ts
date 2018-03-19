import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { FateType } from './fate-type.enum';
import { FateLinkDropdownComponent } from './fate-link-dropdown/fate-link-dropdown.component';

interface Command {
  name: string;
  value : any;
}

@Injectable()
export class FateControllerService {

  // List of available commands, alphabetically
  // see https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
  protected actionMapping = {
    'bold' : {
      command: 'bold',
      name: 'Bold',
      detect: FateType.BOLD
    },
    'italic' : {
      command: 'italic',
      name: 'Italic',
      detect: FateType.ITALIC
    },
    'underline' : {
      command: 'underline',
      name: 'Underlined',
      detect: FateType.UNDERLINE
    },
    'strike' : {
      command: 'strikeThrough',
      name: 'Strike Through',
      detect: FateType.STRIKETHROUGH
    },
    'subscript' : {
      command: 'subscript',
      name: 'Subscript',
      label: 'sub',
      detect: FateType.SUBSCRIPT
    },
    'superscript' : {
      command: 'superscript',
      name: 'Superscript',
      label: 'sup',
      detect: FateType.SUPERSCRIPT
    },
    'heading1' : {
      command: 'formatBlock',
      value: 'H1',
      option: 1,
      name: '1st Header',
      label: 'h1',
      detect: FateType.HEADER1
    },
    'heading2' : {
      command: 'formatBlock',
      value: 'H2',
      option: 2,
      name: '2nd Header',
      label: 'h2',
      detect: FateType.HEADER2
    },
    'heading3' : {
      command: 'formatBlock',
      value: 'H3',
      option: 3,
      name: '3rd Header',
      label: 'h3',
      detect: FateType.HEADER3
    },
    'heading4' : {
      command: 'formatBlock',
      value: 'H4',
      option: 4,
      name: '4th Header',
      label: 'h4',
      detect: FateType.HEADER4
    },
    'heading5' : {
      command: 'formatBlock',
      _value: 'H5',
      option: 5,
      name: '5th Header',
      label: 'h5',
      detect: FateType.HEADER5
    },
    'heading6' : {
      command: 'formatBlock',
      value: 'H6',
      option: 6,
      name: '6th Header',
      label: 'h6',
      detect: FateType.HEADER6
    },
    'normal' : {
      command: 'formatBlock',
      value: 'DIV',
      name: 'Normal',
      label: 'p',
      detect: FateType.PARAGRAPH
    },
    'indent' : {
      command: 'indent',
      name: 'Indent',
    },
    'outdent' : {
      command: 'outdent',
      name: 'Outdent',
    },
    'ordered' : {
      command: 'insertOrderedList',
      name: 'Ordered List',
      detect: FateType.ORDERED_LIST
    },
    'unordered' : {
      command: 'insertUnorderedList',
      name: 'Unorder List',
      detect: FateType.UNORDERED_LIST
    },
    'center' : {
      command: 'justifyCenter',
      name: 'Center',
      detect: FateType.ALIGN_CENTER
    },
    'justify' : {
      command: 'justifyFull',
      name: 'Justify',
      detect: FateType.JUSTIFY
    },
    'left' : {
      command: 'justifyLeft',
      name: 'Left',
      detect: FateType.ALIGN_LEFT
    },
    'right' : {
      command: 'justifyRight',
      name: 'Right',
      detect: FateType.ALIGN_RIGHT
    },
    'undo' : {
      command: 'undo',
      name: 'Undo',
    },
    'redo' : {
      command: 'redo',
      name: 'Redo',
    },
    'clean' : {
      command: 'removeFormat',
      name: 'Remove Formating',
    },
    'link' : {
      command: 'createLink',
      undo: 'unlink',
      name: 'Link',
      detect: FateType.LINK,
      dropdown: FateLinkDropdownComponent
    }
  };
  public getAction(actionName): boolean | any {
    return this.actionMapping[actionName] || false;
  }

  private commands = {
    default: new Subject<Command>()
  };

  private enabledActions = {
    default: new Subject<any>()
  };

  constructor() { }

  public channel(channelId) {
    if (!this.commands[channelId]) {
      this.commands[channelId] = new Subject<Command>();
    }
    return this.commands[channelId];
  }

  public enabled(channelId) {
    if (!this.enabledActions[channelId]) {
      this.enabledActions[channelId] = new Subject<any>();
    }
    return this.enabledActions[channelId];
  }

  public enableActions(channelId, nodes) {
    let actions: Array<any> = [];
    for (let node of nodes) {
      for (let action in this.actionMapping) {
        if (this.actionMapping[action].detect && this.actionMapping[action].detect === node.type) {
          actions.push({action: action, value: node.value});
        }
      }
    }
    this.enabledActions[channelId].next(actions);
  }


  public do(channel, action, value?) {
    if (this.actionMapping[action].dropdown && !value) {
      if (this.actionMapping[action].undo) {
        this.commands[channel].next({name: this.actionMapping[action].undo, value: this.actionMapping[action].value || value});
      } else {
        throw new Error('Action "' + action + '"doesn\'t have a undo command');
      }
    } else {
      this.commands[channel].next({name: this.actionMapping[action].command, value: this.actionMapping[action].value || value});
    }
  }

  public undo(channel, action, value?) {
    let mapping = this.actionMapping[action].undo;
  }
}
