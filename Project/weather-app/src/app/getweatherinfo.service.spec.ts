import { TestBed } from '@angular/core/testing';

import { GetweatherinfoService } from './getweatherinfo.service';

describe('GetweatherinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetweatherinfoService = TestBed.get(GetweatherinfoService);
    expect(service).toBeTruthy();
  });
});
