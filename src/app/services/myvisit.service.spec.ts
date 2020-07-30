import { TestBed } from '@angular/core/testing';

import { MyvisitService } from './myvisit.service';

describe('MyvisitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyvisitService = TestBed.get(MyvisitService);
    expect(service).toBeTruthy();
  });
});
