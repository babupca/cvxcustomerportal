import { TestBed } from '@angular/core/testing';

import { LoaderservicecircleService } from './loaderservicecircle.service';

describe('LoaderservicecircleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoaderservicecircleService = TestBed.get(LoaderservicecircleService);
    expect(service).toBeTruthy();
  });
});
