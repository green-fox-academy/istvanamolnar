import { Component, OnInit } from '@angular/core';
import { GetWeatherInfoService } from '../getweatherinfo.service';
import { GetCountryNameService } from '../getcountryname.service';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {
  temperature: string;
  city: string;
  icon: string;
  country: string;

  constructor(private info: GetWeatherInfoService, private countryName: GetCountryNameService) {
  }
  
  ngOnInit() {
    this.info.getInfo('Budapest')
    .subscribe((data: any) => {
      this.temperature = `${Math.round(data.main.temp - 273)}°C`;
      this.city = data.name;
      this.country = this.countryName.getCountryName(data.sys.country)
      this.icon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    })
  }

}
