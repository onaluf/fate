import { Injectable } from '@angular/core';

import { FateIconService } from './fate-icon.service';

@Injectable({
  providedIn: 'root'
})
export class FateFontawsomeLegacyIconService extends FateIconService {

  protected iconMapping = {
    'bold' : '<i class="fa fa-bold"></i>',
    'italic' : '<i class="fa fa-italic"></i>',
    'underline' : '<i class="fa fa-underline"></i>',
    'strike' : '<i class="fa fa-strikethrough"></i>',
    'subscript' :  '<i class="fa fa-subscript"></i>',
    'superscript' : '<i class="fa fa-superscript"></i>',
    'indent' : '<i class="fa fa-indent"></i>',
    'outdent' : '<i class="fa fa-outdent"></i>',
    'ordered' : '<i class="fa fa-list-ol"></i>',
    'unordered' : '<i class="fa fa-list-ul"></i>',
    'center' : '<i class="fa fa-align-center"></i>',
    'justify' : '<i class="fa fa-align-justify"></i>',
    'left' : '<i class="fa fa-align-left"></i>',
    'right' : '<i class="fa fa-align-right"></i>',
    'undo' : '<i class="fa fa-undo"></i>',
    'redo' : '<i class="fa fa-repeat"></i>',
    'clean' : '<i class="fa fa-eraser"></i>',
    'link' : '<i class="fa fa-link"></i>',
  };
}
