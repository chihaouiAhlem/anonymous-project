import { TestBed } from '@angular/core/testing';

import { AllTeamsService } from './all-teams.service';

describe('AllTeamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllTeamsService = TestBed.get(AllTeamsService);
    expect(service).toBeTruthy();
  });
});
