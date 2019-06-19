import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetWeatherInfoService } from './getweatherinfo.service';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { GetCountryNameService } from './getcountryname.service';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetWeatherInfoService, GetCountryNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
