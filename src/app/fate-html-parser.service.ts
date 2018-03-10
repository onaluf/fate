import { Injectable } from '@angular/core';

import { FateTree } from './fate-tree';
import { FateStyle } from './fate-style.enum';
import { FateType } from './fate-type.enum';

import { FateParser } from './fate-parser.interface';

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
    let types = this.parseType(element);

    let currentNode = node;
    for (let i in types) {
      currentNode.type = types[i];
      if (parseInt(i, 10) + 1 < types.length) {
        let newNode = new FateTree();
        currentNode.children.push(newNode);
        currentNode = newNode;
      }
    }

    for (let i = 0; i < element.childNodes.length; i ++) {
      let child = element.childNodes[i];
      if (child instanceof Text) {
        currentNode.children.push(child.data);
      } else if (child instanceof HTMLElement) {
        currentNode.children.push(this.parseElement(child));
      } else {
        // ignore
      }
    }
    return node;
  }

  public findParentTypes(node: Node, until: Node): Array<FateType> {
    let types: Array<FateType> = [];
    let current: HTMLElement = (node.nodeType === 1)? (node as HTMLElement) : node.parentElement;
    while (current !== until) {
      types.push(...this.parseType(current));
      current = current.parentElement;
    }
    return types;
  }

  private getAdditonalStyle(element: HTMLElement): Array<FateType> {
    let style = element.style;
    switch (style.textAlign) {
      case 'left':
        return [FateType.ALIGN_LEFT];
      case 'center':
        return [FateType.ALIGN_CENTER];
      case 'right':
        return [FateType.ALIGN_RIGHT];
      case 'justify':
        return [FateType.JUSTIFY];
    }
    switch (element.getAttribute('align')) {
      case 'left':
        return [FateType.ALIGN_LEFT];
      case 'center':
        return [FateType.ALIGN_CENTER];
      case 'right':
        return [FateType.ALIGN_RIGHT];
      case 'justify':
        return [FateType.JUSTIFY];
    }
    return [];
  }

  // FIXME detect indentation on non-list blocks
  private parseType(element: HTMLElement): Array<FateType> {
    let types: Array<FateType> = [];
    switch(element.nodeName) {
      case 'H1':
        return [FateType.HEADER1,...this.getAdditonalStyle(element)];
      case 'H2':
        return [FateType.HEADER2,...this.getAdditonalStyle(element)];
      case 'H3':
        return [FateType.HEADER3,...this.getAdditonalStyle(element)];
      case 'H4':
        return [FateType.HEADER4,...this.getAdditonalStyle(element)];
      case 'H5':
        return [FateType.HEADER5,...this.getAdditonalStyle(element)];
      case 'H6':
        return [FateType.HEADER6,...this.getAdditonalStyle(element)];
      case 'B':
      case 'STRONG':
        return [FateType.BOLD];
      case 'I':
      case 'EM':
        return [FateType.ITALIC];
      case 'U':
        return [FateType.UNDERLINE];
      case 'STRIKE':
        return [FateType.STRIKETHROUGH];
      case 'SUB':
        return [FateType.SUBSCRIPT];
      case 'SUP':
        return [FateType.SUPERSCRIPT];
      case 'OL':
        return [FateType.ORDERED_LIST];
      case 'UL':
        return [FateType.UNORDERED_LIST];
      case 'LI':
        return [FateType.LISTITEM];
      case 'DIV':
      case 'P':
        return [FateType.PARAGRAPH,...this.getAdditonalStyle(element)];
      // TODO more
      default:
        return [FateType.NONE];
    }
  }

  private serializeType(tree: FateTree): string {
    switch (tree.type) {
      case FateType.PARAGRAPH:
        return '<div>' + this.serialize(tree) + '</div>';
      case FateType.HEADER1:
        return '<h1>' + this.serialize(tree) + '</h1>';
      case FateType.HEADER2:
        return '<h2>' + this.serialize(tree) + '</h2>';
      case FateType.HEADER3:
        return '<h3>' + this.serialize(tree) + '</h3>';
      case FateType.HEADER4:
        return '<h4>' + this.serialize(tree) + '</h4>';
      case FateType.HEADER5:
        return '<h5>' + this.serialize(tree) + '</h5>';
      case FateType.HEADER6:
        return '<h6>' + this.serialize(tree) + '</h6>';
      case FateType.QUOTE:
        return '<quote>' + this.serialize(tree) + '</quote>';
      case FateType.CODE:
        return '<code>' + this.serialize(tree) + '</code>';
      case FateType.SIZE:
        return '<span style="font-size: ' + tree.style + '">' + this.serialize(tree) + '</span>';
      case FateType.BOLD:
        return '<strong>' + this.serialize(tree) + '</strong>';
      case FateType.ITALIC:
        return '<em>' + this.serialize(tree) + '</em>';
      case FateType.UNDERLINE:
        return '<u>' + this.serialize(tree) + '</u>';
      case FateType.STRIKETHROUGH:
        return '<strike>' + this.serialize(tree) + '</strike>';
      case FateType.SUBSCRIPT:
        return '<sub>' + this.serialize(tree) + '</sub>';
      case FateType.SUPERSCRIPT:
        return '<sup>' + this.serialize(tree) + '</sup>';
      case FateType.ORDERED_LIST:
        return '<ol>' + this.serialize(tree) + '</ol>';
      case FateType.UNORDERED_LIST:
        return '<ul>' + this.serialize(tree) + '</ul>';
      case FateType.LISTITEM:
        return '<li>' + this.serialize(tree) + '</li>';
      case FateType.ALIGN_LEFT:
        return '<div style="text-align: left;">' + this.serialize(tree) + '</div>';
      case FateType.ALIGN_CENTER:
        return '<div style="text-align: center;">' + this.serialize(tree) + '</div>';
      case FateType.ALIGN_RIGHT:
        return '<div style="text-align: right">' + this.serialize(tree) + '</div>';
      case FateType.JUSTIFY:
        return '<div style="text-align: justify;">' + this.serialize(tree) + '</div>';
      case FateType.NONE:
        return this.serialize(tree);
    }
  };

  // Saves a Tree in string representation
  public serialize (tree: FateTree): string {
    let serialized = '';
    tree.children.forEach((child) => {
      if (typeof child === 'string') {
        serialized += child;
      } else {
        serialized += this.serializeType(child);
      }
    });
    return serialized;
  };

  public detectActions(node) {
    let actions: Array<string> = [];
    if (node.parentElement.nodeName === 'B' || node.parentElement.nodeName === 'STRONG') {
      actions.push('bold');
    }
    return actions;
  }
}
