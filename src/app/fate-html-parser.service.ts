import { Injectable } from '@angular/core';
import { FateNode } from './fate-node';
import { FateType } from './fate-type.enum';

@Injectable({
  providedIn: 'root'
})
export class FateHtmlParserService {

  public parse(html: string): FateNode {
    const div = document.createElement('div');
    div.innerHTML = html;
    return this.parseElement(div);
  };

  public parseElement(element: HTMLElement): FateNode {
    const nodes = this.parseType(element);
    let currentNode = nodes[0];

    let isABlock = (currentNode.type === FateType.PARAGRAPH);
    for (let i = 1; i < nodes.length; i++) {
      currentNode.children.push(nodes[i]);
      currentNode = nodes[i];
      if (currentNode.type === FateType.PARAGRAPH) {
        isABlock = true;
      }
    }

    let previousNodeWasText = false;
    for (let i = 0; i < element.childNodes.length; i ++) {
      const child = element.childNodes[i];
      // pick ahead to look for <br>
      if (
          (i < element.childNodes.length - 1) &&
          (this.isLinebreak(element.childNodes[i + 1])) &&
          !(isABlock && i === element.childNodes.length - 2) // The last child is a BR in a block, this can be ignored
        ) {

        previousNodeWasText = false;
        if (child instanceof Text) {
          // wrap the text in a paragraph
          const paragraph = new FateNode(FateType.PARAGRAPH);
          paragraph.children.push(child.data);
          currentNode.children.push(paragraph);
        } else if (child instanceof HTMLElement) {
          // insert an empty paragraph
          currentNode.children.push(this.parseElement(child));
          currentNode.children.push(new FateNode(FateType.PARAGRAPH));
        } else {
          // ignore
        }
      } else {
        if (child instanceof Text) {
          // If two "pure" text node follow one another we can safely merge then as one (for i > 0)
          if (previousNodeWasText) {
            currentNode.children[currentNode.children.length - 1] = currentNode.children[currentNode.children.length - 1] + child.data;
          } else {
            currentNode.children.push(child.data);
          }
          previousNodeWasText = true;
        } else if (child instanceof HTMLElement) {
          currentNode.children.push(this.parseElement(child));
          previousNodeWasText = false;
        } else {
          // ignore
        }
      }
    }
    return nodes[0];
  }

  public findParentNodes(node: Node, until: Node): Array<FateNode> {
    const nodes: Array<FateNode> = [];
    let current: HTMLElement | Node = (node.nodeType === 1) ? (node as HTMLElement) : (node.parentElement || node.parentNode);
    while (current !== until) {
      if (current instanceof HTMLElement) {
        nodes.push(...this.parseType(current));
      }
      current = current.parentElement || node.parentNode;
    }
    return nodes;
  }

  protected getAdditonalStyle(element: HTMLElement): Array<FateNode> {
    const style = element.style;
    const detectedStyleNode = [];
    // Look for alignement
    const align = element.getAttribute('align') || style.textAlign;
    switch (align) {
      case 'left':
        detectedStyleNode.push(new FateNode(FateType.ALIGN_LEFT));
        break;
      case 'center':
        detectedStyleNode.push(new FateNode(FateType.ALIGN_CENTER));
        break;
      case 'right':
        detectedStyleNode.push(new FateNode(FateType.ALIGN_RIGHT));
        break;
      case 'justify':
        detectedStyleNode.push(new FateNode(FateType.JUSTIFY));
        break;
    }
    // Look for color
    const color = element.getAttribute('color') || style.color;
    if(color) {
      detectedStyleNode.push(new FateNode(FateType.COLOR, color));
    }
    // Look for size
    const size = element.getAttribute('size') || style.fontSize;
    if (size) {
      detectedStyleNode.push(new FateNode(FateType.SIZE, size));
    }
    // Look for family
    const typeface = element.getAttribute('face') || style.fontFamily;
    if (typeface) {
      detectedStyleNode.push(new FateNode(FateType.TYPEFACE, typeface));
    }

    return detectedStyleNode;
  }

  protected parseType(element: HTMLElement): Array<FateNode> {
    const additionaStyle = this.getAdditonalStyle(element);
    switch (element.nodeName) {
      case 'H1':
        return [new FateNode(FateType.HEADER1), ...additionaStyle];
      case 'H2':
        return [new FateNode(FateType.HEADER2), ...additionaStyle];
      case 'H3':
        return [new FateNode(FateType.HEADER3), ...additionaStyle];
      case 'H4':
        return [new FateNode(FateType.HEADER4), ...additionaStyle];
      case 'H5':
        return [new FateNode(FateType.HEADER5), ...additionaStyle];
      case 'H6':
        return [new FateNode(FateType.HEADER6), ...additionaStyle];
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
        if (additionaStyle.length > 0) {
          return [...additionaStyle];
        }
        return [new FateNode(FateType.PARAGRAPH)];
      case 'BLOCKQUOTE':
        // FIXME: this doesn't work on FF
        if (element.style.marginLeft === '40px') {
          return [new FateNode(FateType.INDENT)];
        }
        return [new FateNode(FateType.NONE)];
      default:
        if (additionaStyle.length > 0) {
          return [...additionaStyle];
        }
        return [new FateNode(FateType.NONE)];
    }
  }

  protected parseValue(element: HTMLElement): any {
    switch (element.nodeName) {
      case 'A':
        return element.getAttribute('href');
    }
    return undefined;
  }

  protected serializeType(node: FateNode): string {
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
      case FateType.COLOR:
        return '<font color="' + node.value + '">' + this.serialize(node) + '</font>';
      case FateType.SIZE:
        return '<font size="' + node.value + '">' + this.serialize(node) + '</font>';
      case FateType.TYPEFACE:
        return '<font face="' + node.value + '">' + this.serialize(node) + '</font>';
      case FateType.NONE:
        return this.serialize(node);
    }
  };

  protected isLinebreak(child: Node): boolean {
    return (child instanceof HTMLElement && child.nodeName === 'BR');
  }

  private p = document.createElement('p');
  protected encodeHtml(text: string) {
    // From https://stackoverflow.com/a/29482788/829139
    this.p.textContent = text;
    return this.p.innerHTML;
  }

  // Saves a Tree in string representation
  public serialize (node: FateNode, fallbackToBr: boolean = false): string {
    let serialized = '';
    node.children.forEach((child) => {
      if (typeof child === 'string') {
        serialized += this.encodeHtml(child);
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
