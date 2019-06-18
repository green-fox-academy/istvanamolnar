import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvService } from '../env.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  constructor(private env: EnvService, private http: HttpClient) { 
  }

  ngOnInit() {
    console.log(this.env.apiKey);
  }

}
