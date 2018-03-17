import { Injectable } from '@angular/core';

import { FateNode } from './fate-node';
import { FateType } from './fate-type.enum';

import { FateParser } from './fate-parser.interface';

@Injectable()
export class FateHtmlParserService {

  constructor() { }

  public parse(html: string): FateNode {
    let div = document.createElement('div');
    div.innerHTML = html;
    return this.parseElement(div);
  };

  public parseElement(element: HTMLElement): FateNode {
    let nodes = this.parseType(element);;
    let currentNode = nodes[0];
    for (let i = 1; i < nodes.length; i++) {
      currentNode.children.push(nodes[i]);
      currentNode = nodes[i];
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
    return currentNode;
  }

  public findParentNodes(node: Node, until: Node): Array<FateNode> {
    let nodes: Array<FateNode> = [];
    let current: HTMLElement = (node.nodeType === 1)? (node as HTMLElement) : node.parentElement;
    while (current !== until) {
      nodes.push(...this.parseType(current));
      current = current.parentElement;
    }
    return nodes;
  }

  private getAdditonalStyle(element: HTMLElement): Array<FateNode> {
    let style = element.style;
    switch (style.textAlign) {
      case 'left':
        return [new FateNode(FateType.ALIGN_LEFT)];
      case 'center':
        return [new FateNode(FateType.ALIGN_CENTER)];
      case 'right':
        return [new FateNode(FateType.ALIGN_RIGHT)];
      case 'justify':
        return [new FateNode(FateType.JUSTIFY)];
    }
    switch (element.getAttribute('align')) {
      case 'left':
        return [new FateNode(FateType.ALIGN_LEFT)];
      case 'center':
        return [new FateNode(FateType.ALIGN_CENTER)];
      case 'right':
        return [new FateNode(FateType.ALIGN_RIGHT)];
      case 'justify':
        return [new FateNode(FateType.JUSTIFY)];
    }
    return [];
  }

  private parseType(element: HTMLElement): Array<FateNode> {
    switch(element.nodeName) {
      case 'H1':
        return [new FateNode(FateType.HEADER1),...this.getAdditonalStyle(element)];
      case 'H2':
        return [new FateNode(FateType.HEADER2),...this.getAdditonalStyle(element)];
      case 'H3':
        return [new FateNode(FateType.HEADER3),...this.getAdditonalStyle(element)];
      case 'H4':
        return [new FateNode(FateType.HEADER4),...this.getAdditonalStyle(element)];
      case 'H5':
        return [new FateNode(FateType.HEADER5),...this.getAdditonalStyle(element)];
      case 'H6':
        return [new FateNode(FateType.HEADER6),...this.getAdditonalStyle(element)];
      case 'B':
      case 'STRONG':
        return [new FateNode(FateType.BOLD)];
      case 'I':
      case 'EM':
        return [new FateNode(FateType.ITALIC)];
      case 'U':
        return [new FateNode(FateType.UNDERLINE)];
      case 'STRIKE':
        return [new FateNode(FateType.STRIKETHROUGH)];
      case 'SUB':
        return [new FateNode(FateType.SUBSCRIPT)];
      case 'SUP':
        return [new FateNode(FateType.SUPERSCRIPT)];
      case 'A':
        return [new FateNode(FateType.LINK, element.getAttribute('href'))];
      case 'OL':
        return [new FateNode(FateType.ORDERED_LIST)];
      case 'UL':
        return [new FateNode(FateType.UNORDERED_LIST)];
      case 'LI':
        return [new FateNode(FateType.LISTITEM)];
      case 'DIV':
      case 'P':
        return [new FateNode(FateType.PARAGRAPH),...this.getAdditonalStyle(element)];
      case 'BLOCKQUOTE':
        // FIXME: this doesn't work on FF
        if (element.style.marginLeft === '40px') {
          return [new FateNode(FateType.INDENT)];
        }
        return [new FateNode(FateType.NONE)];
      // TODO more
      default:
        return [new FateNode(FateType.NONE)];
    }
  }

  private parseValue(element: HTMLElement): any {
    switch(element.nodeName) {
      case 'A':
        return element.getAttribute('href');
    }
    return undefined;
  }

  private serializeType(node: FateNode): string {
    switch (node.type) {
      case FateType.PARAGRAPH:
        return '<div>' + this.serialize(node, true) + '</div>';
      case FateType.HEADER1:
        return '<h1>' + this.serialize(node, true) + '</h1>';
      case FateType.HEADER2:
        return '<h2>' + this.serialize(node, true) + '</h2>';
      case FateType.HEADER3:
        return '<h3>' + this.serialize(node, true) + '</h3>';
      case FateType.HEADER4:
        return '<h4>' + this.serialize(node, true) + '</h4>';
      case FateType.HEADER5:
        return '<h5>' + this.serialize(node, true) + '</h5>';
      case FateType.HEADER6:
        return '<h6>' + this.serialize(node, true) + '</h6>';
      case FateType.QUOTE:
        return '<quote>' + this.serialize(node) + '</quote>';
      case FateType.CODE:
        return '<code>' + this.serialize(node) + '</code>';
      case FateType.SIZE:
        return '<span style="font-size: ' + node.value + '">' + this.serialize(node) + '</span>';
      case FateType.BOLD:
        return '<strong>' + this.serialize(node) + '</strong>';
      case FateType.ITALIC:
        return '<em>' + this.serialize(node) + '</em>';
      case FateType.UNDERLINE:
        return '<u>' + this.serialize(node) + '</u>';
      case FateType.STRIKETHROUGH:
        return '<strike>' + this.serialize(node) + '</strike>';
      case FateType.SUBSCRIPT:
        return '<sub>' + this.serialize(node) + '</sub>';
      case FateType.SUPERSCRIPT:
        return '<sup>' + this.serialize(node) + '</sup>';
      case FateType.LINK:
        return '<a href="' + node.value + '">' + this.serialize(node) + '</a>';
      case FateType.ORDERED_LIST:
        return '<ol>' + this.serialize(node) + '</ol>';
      case FateType.UNORDERED_LIST:
        return '<ul>' + this.serialize(node) + '</ul>';
      case FateType.LISTITEM:
        return '<li>' + this.serialize(node) + '</li>';
      case FateType.ALIGN_LEFT:
        return '<div style="text-align: left;">' + this.serialize(node, true) + '</div>';
      case FateType.ALIGN_CENTER:
        return '<div style="text-align: center;">' + this.serialize(node, true) + '</div>';
      case FateType.ALIGN_RIGHT:
        return '<div style="text-align: right">' + this.serialize(node, true) + '</div>';
      case FateType.JUSTIFY:
        return '<div style="text-align: justify;">' + this.serialize(node, true) + '</div>';
      case FateType.INDENT:
        return '<blockquote style="margin-left: 40px">' + this.serialize(node, true) + '</blockquote>';
      case FateType.NONE:
        return this.serialize(node);
    }
  };

  // Saves a Tree in string representation
  public serialize (node: FateNode, fallbackToBr: boolean = false): string {
    let serialized = '';
    node.children.forEach((child) => {
      if (typeof child === 'string') {
        serialized += child;
      } else {
        serialized += this.serializeType(child);
      }
    });
    if (fallbackToBr && !serialized) {
      serialized = '<br>';
    }
    return serialized;
  };
}
