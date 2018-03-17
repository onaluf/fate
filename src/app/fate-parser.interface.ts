import { FateNode } from './fate-node';

export interface FateParser {
  parse(html: string): FateNode
  serialize (tree: FateNode): string;
}
