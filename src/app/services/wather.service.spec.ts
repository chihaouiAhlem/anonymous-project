import { TestBed } from '@angular/core/testing';

import { WatherService } from './wather.service';

describe('WatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WatherService = TestBed.get(WatherService);
    expect(service).toBeTruthy();
  });
});
