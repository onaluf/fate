import { Injectable } from '@angular/core';

import { FateMarshalInterface } from './fate-marshal-interface';
import { FateTree } from './fate-tree';
import { FateType } from './fate-type.enum';
import { FateStyle } from './fate-style.enum';

/*
 * This is the default marshaller: it reads and writes HTML.
 */
@Injectable()
export class FateMarshalService implements FateMarshalInterface {

  constructor() { }

  // Loads a Tree from it's string representation
  public load(input: string): FateTree {
    return new FateTree();
  };

  private marshalType(tree: FateTree): string {
    switch (tree.type) {
      case FateType.PARAGRAPH:
        return '<p>' + this.save(tree) + '</p>';
      case FateType.HEADER1:
        return '<h1>' + this.save(tree) + '</h1>';
      case FateType.HEADER2:
        return '<h2>' + this.save(tree) + '</h2>';
      case FateType.HEADER3:
        return '<h3>' + this.save(tree) + '</h3>';
      case FateType.HEADER4:
        return '<h4>' + this.save(tree) + '</h4>';
      case FateType.HEADER5:
        return '<h5>' + this.save(tree) + '</h5>';
      case FateType.HEADER6:
        return '<h6>' + this.save(tree) + '</h6>';
      case FateType.QUOTE:
        return '<quote>' + this.save(tree) + '</quote>';
      case FateType.CODE:
        return '<code>' + this.save(tree) + '</code>';
      case FateType.SIZE:
        return '<span style="font-size: ' + tree.style + '">' + this.save(tree) + '</span>';
      case FateType.BOLD:
        return '<strong>' + this.save(tree) + '</strong>';
      case FateType.ITALIC:
        return '<em>' + this.save(tree) + '</em>';
      case FateType.UNDERLINE:
        return '<u>' + this.save(tree) + '<u>';
      case FateType.STRIKETHROUGH:
        return '<strike>' + this.save(tree) + '</strike>';
      case FateType.SUBSCRIPT:
        return '<sub>' + this.save(tree) + '</sub>';
      case FateType.SUPERSCRIPT:
        return '<sup>' + this.save(tree) + '</sup>';
      case FateType.ORDERED_LIST:
        return '<ol>' + this.save(tree) + '</ol>';
      case FateType.UNORDERED_LIST:
        return '<ul>' + this.save(tree) + '</ul>';
      case FateType.LISTITEM:
        return '<li>' + this.save(tree) + '</li>';
      case FateType.ALIGN_LEFT:
        return '<div style="text-align: left;">' + this.save(tree) + '</div>';
      case FateType.ALIGN_CENTER:
        return '<div style="text-align: center;">' + this.save(tree) + '</div>';
      case FateType.ALIGN_RIGHT:
        return '<div style="text-align: right">' + this.save(tree) + '</div>';
      case FateType.JUSTIFY:
        return '<div style="text-align: justify;">' + this.save(tree) + '</div>';
      case FateType.NONE:
        return this.save(tree);
    }
  };

  // Saves a Tree in string representation
  public save(tree: FateTree): string {
    let marshalled = '';
    tree.children.forEach((child) => {
      if (typeof child === 'string') {
        marshalled += child;
      } else {
        marshalled += this.marshalType(child);
      }
    });
    return marshalled;
  };
}
