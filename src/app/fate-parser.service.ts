import { Injectable } from '@angular/core';

import { FateHtmlParserService } from './fate-html-parser.service';
import { FateParser } from './fate-parser.interface';

@Injectable()
export class FateParserService extends FateHtmlParserService implements FateParser {}
