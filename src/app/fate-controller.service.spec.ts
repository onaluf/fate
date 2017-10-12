import { TestBed, inject } from '@angular/core/testing';

import { FateControllerService } from './fate-controller.service';

describe('FateControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FateControllerService]
    });
  });

  it('should be created', inject([FateControllerService], (service: FateControllerService) => {
    expect(service).toBeTruthy();
  }));
});
