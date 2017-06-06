import { TestBed, inject } from '@angular/core/testing';

import { RecordSerieService } from './record-serie.service';

describe('RecordSerieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecordSerieService]
    });
  });

  it('should be created', inject([RecordSerieService], (service: RecordSerieService) => {
    expect(service).toBeTruthy();
  }));
});
