import { Component, OnInit } from '@angular/core';
import { GetWeatherInfoService } from '../services/getweatherinfo.service';
import { City } from '../CityInstance';
import { HttpClient } from '@angular/common/http';
import { GetCountryNameService } from '../services/getcountryname.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cities: string[];
  cityData: City[];
  constructor(private info: GetWeatherInfoService, private http: HttpClient, private countryName: GetCountryNameService) { 
    this.cities = ['Amsterdam', 'Basel', 'London', 'Porto', 'Sofia'];
    this.cityData = [];
  }

  ngOnInit() {
    this.cities.forEach((city: string) => {
      this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${environment.apiKey}`)
      .subscribe((data: any) => {
        this.cityData.push(new City(`${Math.round(data['main'].temp - 273)}°C`, data['name'], `http://openweathermap.org/img/w/${data['weather'][0].icon}.png`, this.countryName.getCountryName(data['sys'].country)));
      })
    })
  }
}
