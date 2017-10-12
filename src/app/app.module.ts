import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FateEditorUiComponent } from './fate-editor-ui/fate-editor-ui.component';

import { FateMarshalService } from './fate-marshal.service';
import { FateControllerService } from './fate-controller.service';
import { FateHtmlParserService } from './fate-html-parser.service';

import { FateEditorDirective } from './fate-editor.directive';

@NgModule({
  declarations: [
    AppComponent,
    FateEditorUiComponent,
    FateEditorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FateMarshalService,
    FateControllerService,
    FateHtmlParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
