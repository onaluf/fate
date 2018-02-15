import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { FateUiComponent } from './fate-ui/fate-ui.component';
import { FateInputComponent } from './fate-input/fate-input.component';

import { FateControllerService } from './fate-controller.service';
import { FateHtmlParserService } from './fate-html-parser.service';
import { FateIconService } from './fate-icon.service';
import { FateParserService } from './fate-parser.service';
import { FateBootstrapComponent } from './fate-bootstrap/fate-bootstrap.component';

export { FateParser } from './fate-parser.interface';
export { FateIcon } from './fate-icon.interface';
export { FateUiComponent } from './fate-ui/fate-ui.component';
export { FateInputComponent } from './fate-input/fate-input.component';
export { FateIconService } from './fate-icon.service';
export { FateParserService } from './fate-parser.service';
export { FateTree } from './fate-tree';
export { FateType } from './fate-type.enum';
export { FateStyle } from './fate-style.enum';

@NgModule({
  declarations: [
    AppComponent,
    FateInputComponent,
    FateUiComponent,
    FateBootstrapComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FateControllerService,
    FateHtmlParserService,
    FateIconService,
    FateParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
