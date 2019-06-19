import { TestBed } from '@angular/core/testing';

import { GetWeatherInfoService } from './getweatherinfo.service';

describe('GetWeatherInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetWeatherInfoService = TestBed.get(GetWeatherInfoService);
    expect(service).toBeTruthy();
  });
});
