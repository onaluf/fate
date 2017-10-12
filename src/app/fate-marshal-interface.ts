import { FateTree } from './fate-tree';

export interface FateMarshalInterface {
  // Loads a Tree from it's string representation
  load(input: string): FateTree;

  // Saves a Tree in string representation
  save(tree: FateTree): string;
}
