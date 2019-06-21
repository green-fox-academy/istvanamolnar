import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { GetWeatherInfoService } from './services/getweatherinfo.service';
import { WeatherInfoComponent } from './weather-info/weather-info.component';
import { SearchComponent } from './weather-info/search/search.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoComponent,
    SearchComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GetWeatherInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
