import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EnvServiceProvider } from './env.service.provider';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EnvServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
