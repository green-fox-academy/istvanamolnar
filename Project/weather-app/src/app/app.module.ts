import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { GetWeatherInfoService } from './services/getweatherinfo.service';
import { GetCountryNameService } from './services/getcountryname.service';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetWeatherInfoService, GetCountryNameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
