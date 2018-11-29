import { Injectable } from '@angular/core';

import { FateNode, FateType, FateHtmlParserService } from './fate.module';

@Injectable()
export class ExampleCustomHtmlParserService extends FateHtmlParserService {

  constructor() {
    super();
  }

  public parseType(element: HTMLElement): Array<FateNode> {
    if (element.nodeName === 'SPAN' && element.classList.contains('repos')) {
      return [new FateNode(('mention' as FateType), {
        url: element.getAttribute('data-href'),
        description: element.getAttribute('title'),
        name: element.textContent
      })];
    } else {
      return super.parseType(element);
    }
  }

  protected serializeType(node: FateNode) {
    if ((node.type as string) === 'mention') {
      return '<span class="repos custom-block" tabindex="0" contenteditable="false" data-href="' + node.value.url + '" title="' + node.value.description + '"><i class="fab fa-github"></i> ' + node.value.name + '</span>'
    } else {
      return super.serializeType(node);
    }
  }
}
