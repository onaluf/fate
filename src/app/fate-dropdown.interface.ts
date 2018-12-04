import { EventEmitter } from '@angular/core';

export interface FateDropdown {
  value: any;
  valueChange: EventEmitter<any>;
  selectNext: () => void;
  selecPrevious: () => void;
  confirmSelection: () => void;
}
