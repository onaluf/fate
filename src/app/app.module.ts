import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FateEditorUiComponent } from './fate-editor-ui/fate-editor-ui.component';

import { FateMarshalService } from './fate-marshal.service';
import { FateControllerService } from './fate-controller.service';
import { FateHtmlParserService } from './fate-html-parser.service';

import { FateEditorDirective } from './fate-editor.directive';
import { FateEditorComponent } from './fate-editor/fate-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FateEditorUiComponent,
    FateEditorDirective,
    FateEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    FateMarshalService,
    FateControllerService,
    FateHtmlParserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
