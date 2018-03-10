import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

import { FateType } from './fate-type.enum';

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
      command: 'normal',
      value: 'DIV',
      name: 'Body',
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
  };

  public getAction(actionName): boolean | any {
    return this.actionMapping[actionName] || false;
  }

  private commands = {
    default: new Subject<Command>()
  };

  private enabledActions = {
    default: new Subject<Command>()
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
      this.enabledActions[channelId] = new Subject<Command>();
    }
    return this.enabledActions[channelId];
  }

  public enableActions(channelId, types) {
    let actions: Array<string> = [];
    for (let type of types) {
      for (let action in this.actionMapping) {
        if (this.actionMapping[action].detect && this.actionMapping[action].detect === type) {
          actions.push(action);
        }
      }
    }
    this.enabledActions[channelId].next(actions);
  }


  public do(channel, action) {
    this.commands[channel].next({name: this.actionMapping[action].command, value: this.actionMapping[action].value});
  }
}
