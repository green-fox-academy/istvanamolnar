import { TestBed } from '@angular/core/testing';

import { GetcountrynameService } from './getcountryname.service';

describe('GetcountrynameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetcountrynameService = TestBed.get(GetcountrynameService);
    expect(service).toBeTruthy();
  });
});
