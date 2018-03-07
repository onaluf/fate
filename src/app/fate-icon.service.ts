import { Injectable } from '@angular/core';

import { FateIcon } from './fate-icon.interface';

@Injectable()
export class FateIconService implements FateIcon {

  protected iconMapping: any = {
    'bold' : '<i class="fas fa-bold"></i>',
    'italic' : '<i class="fas fa-italic"></i>',
    'underline' : '<i class="fas fa-underline"></i>',
    'strike' : '<i class="fas fa-strikethrough"></i>',
    'subscript' :  '<i class="fas fa-subscript"></i>',
    'superscript' : '<i class="fas fa-superscript"></i>',
    'indent' : '<i class="fas fa-indent"></i>',
    'outdent' : '<i class="fas fa-outdent"></i>',
    'ordered' : '<i class="fas fa-list-ol"></i>',
    'unordered' : '<i class="fas fa-list-ul"></i>',
    'center' : '<i class="fas fa-align-center"></i>',
    'justify' : '<i class="fas fa-align-justify"></i>',
    'left' : '<i class="fas fa-align-left"></i>',
    'right' : '<i class="fas fa-align-right"></i>',
    'undo' : '<i class="fas fa-undo-alt"></i>',
    'redo' : '<i class="fas fa-redo-alt"></i>',
    'clean' : '<i class="fas fa-erase"></i>'
  };

  public getIcon(actionName): string {
    return this.iconMapping[actionName];
  }
}
