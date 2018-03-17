import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FateUiComponent } from './fate-ui/fate-ui.component';
import { FateInputComponent } from './fate-input/fate-input.component';
import { FateBootstrapComponent } from './fate-bootstrap/fate-bootstrap.component';
import { FateMaterialComponent } from './fate-material/fate-material.component';

import { FateControllerService } from './fate-controller.service';
import { FateHtmlParserService } from './fate-html-parser.service';
import { FateIconService } from './fate-icon.service';
import { FateMaterialIconService } from './fate-material-icon.service';
import { FateParserService } from './fate-parser.service';

export { FateParser } from './fate-parser.interface';
export { FateIcon } from './fate-icon.interface';
export { FateUiComponent } from './fate-ui/fate-ui.component';
export { FateInputComponent } from './fate-input/fate-input.component';
export { FateIconService } from './fate-icon.service';
export { FateMaterialIconService } from './fate-material-icon.service';
export { FateParserService } from './fate-parser.service';
export { FateNode } from './fate-node';
export { FateType } from './fate-type.enum';

@NgModule({
  declarations: [
    FateInputComponent,
    FateUiComponent,
    FateBootstrapComponent,
    FateMaterialComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
  ],
  exports: [
    FateUiComponent,
    FateInputComponent,
    FateBootstrapComponent,
    FateMaterialComponent,
  ],
  providers: [
    FateControllerService,
    FateHtmlParserService,
    FateIconService,
    FateMaterialIconService,
    FateParserService
  ]
})
export class FateModule { }
