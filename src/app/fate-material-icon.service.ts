import { Injectable } from '@angular/core';

import { FateIconService } from './fate-icon.service';

@Injectable({
  providedIn: 'root'
})
export class FateMaterialIconService extends FateIconService {

  protected iconMapping = {
    'bold' : '<i class="material-icons">format_bold</i>',
    'italic' : '<i class="material-icons">format_italic</i>',
    'underline' : '<i class="material-icons">format_underlined</i>',
    'strike' : '<i class="material-icons">format_strikethrough</i>',
    'subscript' :  'x<sub>2</sub>',
    'superscript' : 'x<sup>2</sup>',
    'indent' : '<i class="material-icons">format_indent_increase</i>',
    'outdent' : '<i class="material-icons">format_indent_decrease</i>',
    'ordered' : '<i class="material-icons">format_list_numbered</i>',
    'unordered' : '<i class="material-icons">format_list_bulleted</i>',
    'center' : '<i class="material-icons">format_align_center</i>',
    'justify' : '<i class="material-icons">format_align_justify</i>',
    'left' : '<i class="material-icons">format_align_left</i>',
    'right' : '<i class="material-icons">format_align_right</i>',
    'undo' : '<i class="material-icons">undo</i>',
    'redo' : '<i class="material-icons">redo</i>',
    'clean' : '<i class="material-icons">format_clear</i>',
    'link' : '<i class="material-icons">link</i>',
  };
}
