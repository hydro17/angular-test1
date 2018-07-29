import { TestBed, inject } from '@angular/core/testing';

import { TotalizerService } from './services/totalizer.service';

describe('TotalizerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TotalizerService]
    });
  });

  it('should be created', inject([TotalizerService], (service: TotalizerService) => {
    expect(service).toBeTruthy();
  }));
});
