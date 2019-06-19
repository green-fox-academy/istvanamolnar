import { Component, OnInit } from '@angular/core';
import { GetWeatherInfoService } from '../services/getweatherinfo.service';
import { City } from '../CityInstance';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  city: City;

  constructor (private info: GetWeatherInfoService) { }
  
  ngOnInit() {
    this.info.currentCity.subscribe(data => {this.city = data;});
  }
}
