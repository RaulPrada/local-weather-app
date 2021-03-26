import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, CurrentWeatherComponent],
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, FlexLayoutModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
