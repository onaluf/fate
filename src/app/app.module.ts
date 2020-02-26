import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

// Customization example
import { ExampleMentionDropdownComponent } from './example-mention-dropdown/example-mention-dropdown.component';
import { ExampleCustomHtmlParserService } from './example-custom-html-parser.service';
import { ExampleCustomParserService } from './example-custom-parser.service';

import { AppComponent } from './app.component';

import { FateModule, FateMaterialModule, FateHtmlParserService, FateParserService } from './fate.module';


@NgModule({
  declarations: [
    AppComponent,
    ExampleMentionDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FateModule,
    FateMaterialModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],
  entryComponents: [
    ExampleMentionDropdownComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    {provide: FateHtmlParserService, useClass: ExampleCustomHtmlParserService},
    {provide: FateParserService, useClass: ExampleCustomParserService},
  ]
})
export class AppModule { }
