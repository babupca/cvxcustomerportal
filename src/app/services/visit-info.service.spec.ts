import { TestBed } from '@angular/core/testing';

import { VisitInfoService } from './visit-info.service';

describe('VisitInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VisitInfoService = TestBed.get(VisitInfoService);
    expect(service).toBeTruthy();
  });
});
