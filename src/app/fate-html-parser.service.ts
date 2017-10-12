import { Injectable } from '@angular/core';

import { FateTree } from './fate-tree';
import { FateStyle } from './fate-style.enum';
import { FateType } from './fate-type.enum';

@Injectable()
export class FateHtmlParserService {

  constructor() { }

  public parse(html: string): FateTree {
    let div = document.createElement('div');
    div.innerHTML = html;
    return this.parseElement(div);
  };

  public parseElement(element: HTMLElement): FateTree {
    let node = new FateTree();
    node.type = this.parseType(element);

    for (let i = 0; i < element.childNodes.length; i ++) {
      let child = element.childNodes[i];
      if (child instanceof Text) {
        node.children.push(child.data);
      } else if (child instanceof HTMLElement) {
        node.children.push(this.parseElement(child));
      } else {
        // ignore
      }
    }
    return node;
  }

  private parseType(element: HTMLElement): FateType {
    switch(element.nodeName) {
      case 'H1':
        return FateType.HEADER1;
      case 'H2':
        return FateType.HEADER2;
      case 'H3':
        return FateType.HEADER3;
      case 'H4':
        return FateType.HEADER4;
      case 'H5':
        return FateType.HEADER5;
      case 'H6':
        return FateType.HEADER6;
      case 'B':
        return FateType.BOLD;
      case 'I':
        return FateType.ITALIC;
      case 'U':
        return FateType.UNDERLINE;
      case 'STRIKE':
        return FateType.STRIKETHROUGH;
      case 'SUB':
        return FateType.SUBSCRIPT;
      case 'SUP':
        return FateType.SUPERSCRIPT;
      case 'OL':
        return FateType.ORDERED_LIST;
      case 'UL':
        return FateType.UNORDERED_LIST;
      case 'LI':
        return FateType.LISTITEM;
      case 'DIV':
      case 'P':
        let style = element.style;
        switch (style.textAlign) {
          case 'left':
            return FateType.ALIGN_LEFT;
          case 'center':
            return FateType.ALIGN_CENTER;
          case 'right':
            return FateType.ALIGN_RIGHT;
          case 'justify':
            return FateType.JUSTIFY;
        }
        return FateType.PARAGRAPH;
      // TODO more
      default:
        return FateType.NONE;
    }
  }
}
