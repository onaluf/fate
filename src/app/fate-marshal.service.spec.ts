import { TestBed, inject } from '@angular/core/testing';

import { FateMarshalService } from './fate-marshal.service';

describe('FateMarshalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FateMarshalService]
    });
  });

  it('should be created', inject([FateMarshalService], (service: FateMarshalService) => {
    expect(service).toBeTruthy();
  }));
});
