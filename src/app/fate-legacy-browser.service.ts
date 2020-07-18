import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FateLegacyBrowserService {
  
  public findParentElement(node: Node): HTMLElement {
    let el = node
    while (!(el instanceof HTMLElement)) {
      el = el.parentElement || el.parentNode;
    }
    return el;
  }

  public findParent(node: Node, parentSelector: string) {
    if (Element.prototype.closest) {
      return this.findParentElement(node).closest(parentSelector);
    }
    
    let matchMethod;
    if (Element.prototype.matches) {
      matchMethod = 'matches';
    } else if ((Element.prototype as any).msMatchesSelector) {
      matchMethod = 'msMatchesSelector';
    } else if ((Element.prototype as any).webkitMatchesSelector) {
      matchMethod = 'webkitMatchesSelector';
    } else {
      throw Error('The browser is not supported ("closest" and "mateches" are missing)');
    }

    let el = node;

    do {
      try {
        if (Element.prototype[matchMethod].call(el, parentSelector)) {
          return el;
        }
      } catch (e) {
        console.info('something happend', e);
      }
      
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  }
}
