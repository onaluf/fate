import { FateTree } from './fate-tree';

export interface FateParser {
  parse(html: string): FateTree
  serialize (tree: FateTree): string;
  getAction(actionName): boolean | any;
}
