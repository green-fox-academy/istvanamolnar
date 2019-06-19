import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GetWeatherInfoService {

  constructor(private http: HttpClient) { }

  getInfo(city): any {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.apiKey}`)
  }

}
