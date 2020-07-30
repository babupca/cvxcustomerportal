import { TestBed } from '@angular/core/testing';

import { DaysTogoService } from './days-togo.service';

describe('DaysTogoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DaysTogoService = TestBed.get(DaysTogoService);
    expect(service).toBeTruthy();
  });
});
