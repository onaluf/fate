import { FateStyle } from './fate-style.enum';
import { FateType } from './fate-type.enum';

export class FateTree {
  public style: Array<FateStyle> = [];
  public type: FateType = FateType.NONE;
  public children: Array<FateTree | string> = [];
}
