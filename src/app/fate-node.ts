import { FateType } from './fate-type.enum';

export class FateNode {
  constructor(public type: FateType = FateType.NONE, public value?: any) {}
  
  public children: Array<FateNode | string> = [];
}
