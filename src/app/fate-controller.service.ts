import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

import { FateType } from './fate-type.enum';
import { FateLinkDropdownComponent } from './fate-link-dropdown/fate-link-dropdown.component';

export interface FateCommand {
  name: string;
  value: any;
}

@Injectable({
  providedIn: 'root'
})
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
      name: '1st Header',
      label: 'h1',
      detect: FateType.HEADER1
    },
    'heading2' : {
      command: 'formatBlock',
      value: 'H2',
      name: '2nd Header',
      label: 'h2',
      detect: FateType.HEADER2
    },
    'heading3' : {
      command: 'formatBlock',
      value: 'H3',
      name: '3rd Header',
      label: 'h3',
      detect: FateType.HEADER3
    },
    'heading4' : {
      command: 'formatBlock',
      value: 'H4',
      name: '4th Header',
      label: 'h4',
      detect: FateType.HEADER4
    },
    'heading5' : {
      command: 'formatBlock',
      value: 'H5',
      name: '5th Header',
      label: 'h5',
      detect: FateType.HEADER5
    },
    'heading6' : {
      command: 'formatBlock',
      value: 'H6',
      name: '6th Header',
      label: 'h6',
      detect: FateType.HEADER6
    },
    'normal' : {
      command: 'formatBlock',
      value: 'DIV',
      name: 'Normal',
      label: 'p',
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
  public registerAction(name: string, action: any) {
    if (this.actionMapping[name]) {
      throw new Error('An action with the name "' + name + '" already exists!');
    } else {
      this.actionMapping[name] = action;
    }
  }
  public getAction(actionName): boolean | any {
    return this.actionMapping[actionName] || false;
  }

  protected inlineActionMapping: any = {};
  public registerInlineAction(name: string, action: any) {
    if (this.inlineActionMapping[name]) {
      throw new Error('An inline action with the name "' + name + '" already exists!');
    } else {
      this.inlineActionMapping[name] = action;
    }
  }
   public getInlineAction(context: string): boolean | any {
    for (const action of Object.keys(this.inlineActionMapping)) {
      const match = this.inlineActionMapping[action].regexp.exec(context);
      if (match) {
        this.inlineActionMapping[action].matched = match[1];
        return this.inlineActionMapping[action];
      }
    }
    return false;
  }

  protected commandsPipe = {
    default: new Subject<FateCommand>()
  };

  protected enabledActions = {
    default: new Subject<any>()
  };

  constructor() { }

  public channel(channelId) {
    if (!this.commandsPipe[channelId]) {
      this.commandsPipe[channelId] = new Subject<FateCommand>();
    }
    return this.commandsPipe[channelId];
  }

  public enabled(channelId) {
    if (!this.enabledActions[channelId]) {
      this.enabledActions[channelId] = new Subject<any>();
    }
    return this.enabledActions[channelId];
  }

  public enableActions(channelId, nodes) {
    const actions: Array<any> = [];
    for (const node of nodes) {
      for (const action in this.actionMapping) {
        if (this.actionMapping[action].detect && this.actionMapping[action].detect === node.type) {
          actions.push({action: action, value: node.value});
        } else if (this.actionMapping[action].detect && typeof this.actionMapping[action].detect === 'function') {
          const detected = this.actionMapping[action].detect(node);
          if (detected) {
            actions.push({action: action, value: detected.value});
          }
        }
      }
    }
    this.enabledActions[channelId].next(actions);
  }


  public do(channel, action, value?) {
    if (this.actionMapping[action].dropdown && !value) {
      if (this.actionMapping[action].undo) {
        this.commandsPipe[channel].next({name: this.actionMapping[action].undo, value: this.actionMapping[action].value || value});
      } else {
        throw new Error('Action "' + action + '"doesn\'t have a undo command');
      }
    } else {
      if (this.actionMapping[action].value && (typeof this.actionMapping[action].value === 'function')) {
        this.commandsPipe[channel].next({name: this.actionMapping[action].command, value: this.actionMapping[action].value(value)});
      } else {
        this.commandsPipe[channel].next({name: this.actionMapping[action].command, value: this.actionMapping[action].value || value});
      }
    }
  }

  public doInline(channel, action, value?) {
    if (action.dropdown && !value) {
      if (action.undo) {
        this.commandsPipe[channel].next({name: action.undo, value: action.value || value});
      } else {
        throw new Error('Action "' + action + '"doesn\'t have a undo command');
      }
    } else {
      if (action.value && (typeof action.value === 'function')) {
        this.commandsPipe[channel].next({name: action.command, value: action.value(value)});
      } else {
        this.commandsPipe[channel].next({name: action.command, value: action.value || value});
      }
    }
  }

  public undo(channel, action, value?) {
    const mapping = this.actionMapping[action].undo;
    // TODO
  }
}
