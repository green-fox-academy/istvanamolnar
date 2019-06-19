import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

import { City } from './../CityInstance';
import { GetCountryNameService } from '../services/getcountryname.service';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherInfoService {
  city: City;
  private inputCity = new BehaviorSubject<City>(this.city);
  currentCity = this.inputCity.asObservable();

  constructor(private http: HttpClient, private countryName: GetCountryNameService) { 
    this.getInfo('Ujszilvas');
  }

  getInfo(city: string): any {
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.apiKey}`)
    .subscribe((data: any) => {
      this.inputCity.next(new City(`${Math.round(data['main'].temp - 273)}°C`, data['name'], `http://openweathermap.org/img/w/${data['weather'][0].icon}.png`, this.countryName.getCountryName(data['sys'].country)));
      });
  }
}
