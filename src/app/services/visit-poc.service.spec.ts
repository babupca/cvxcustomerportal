import { TestBed } from '@angular/core/testing';

import { VisitPocService } from './visit-poc.service';

describe('VisitPocService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitPocService = TestBed.get(VisitPocService);
    expect(service).toBeTruthy();
  });
});
