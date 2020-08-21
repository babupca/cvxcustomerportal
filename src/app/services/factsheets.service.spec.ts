import { TestBed } from '@angular/core/testing';

import { FactsheetsService } from './factsheets.service';

describe('FactsheetsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FactsheetsService = TestBed.get(FactsheetsService);
    expect(service).toBeTruthy();
  });
});
