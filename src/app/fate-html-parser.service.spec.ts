import { TestBed, inject } from '@angular/core/testing';

import { FateHtmlParserService } from './fate-html-parser.service';

describe('FateHtmlParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FateHtmlParserService]
    });
  });

  it('should be created', inject([FateHtmlParserService], (service: FateHtmlParserService) => {
    expect(service).toBeTruthy();
  }));
});
