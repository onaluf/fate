import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FateUiComponent } from './fate-ui/fate-ui.component';
import { FateInputComponent } from './fate-input/fate-input.component';
import { FateBootstrapComponent } from './fate-bootstrap/fate-bootstrap.component';
import { FateMaterialComponent } from './fate-material/fate-material.component';
import { FateLinkDropdownComponent } from './fate-link-dropdown/fate-link-dropdown.component';

export { FateParser } from './fate-parser.interface';
export { FateIcon } from './fate-icon.interface';
export { FateDropdown } from './fate-dropdown.interface';
export { FateUiComponent } from './fate-ui/fate-ui.component';
export { FateInputComponent } from './fate-input/fate-input.component';
export { FateLinkDropdownComponent } from './fate-link-dropdown/fate-link-dropdown.component';
export { FateIconService } from './fate-icon.service';
export { FateMaterialIconService } from './fate-material-icon.service';
export { FateFontawsomeLegacyIconService } from './fate-fontawsome-legacy-icon.service';
export { FateParserService } from './fate-parser.service';
export { FateControllerService, FateCommand } from './fate-controller.service';
export { FateHtmlParserService } from './fate-html-parser.service';
export { FateNode } from './fate-node';
export { FateType } from './fate-type.enum';

@NgModule({
  declarations: [
    FateInputComponent,
    FateUiComponent,
    FateBootstrapComponent,
    FateLinkDropdownComponent,
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
    FateLinkDropdownComponent
  ],
})
export class FateModule { }

@NgModule({
  declarations: [
    FateMaterialComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    FateModule
  ],
  exports: [
    FateMaterialComponent,
  ]
})
export class FateMaterialModule { }