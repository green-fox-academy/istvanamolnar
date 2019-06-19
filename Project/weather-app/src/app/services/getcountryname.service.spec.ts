import { TestBed } from '@angular/core/testing';

import { GetCountryNameService } from './getcountryname.service';

describe('GetcountrynameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCountryNameService = TestBed.get(GetCountryNameService);
    expect(service).toBeTruthy();
  });
});
