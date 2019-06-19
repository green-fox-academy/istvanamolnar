import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { GetCountryNameService } from './services/getcountryname.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef){
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#eee';
  }
}
