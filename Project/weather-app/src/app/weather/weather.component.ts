import { Component, OnInit } from '@angular/core';
import { EnvService } from '../env.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

@Injectable()
export class WeatherComponent implements OnInit {
  weatherData: any;
  constructor(private env: EnvService, private http: HttpClient) { 
  }

  ngOnInit() {
    this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=London&appid=${this.env.apiKey}`)
    .subscribe((response: any) => {
      this.weatherData = response;
      console.log(this.weatherData.main.temp);
    })
  }
/* 
  getWeatherInfo(): any {
    
  } */
}
