import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private weatherService:WeatherService){

  }
  cityName:string='Biratnagar';
  weatherData?:weatherData;
 

  ngOnInit(): void {
    this.getweatherData(this.cityName);
    this.cityName = '';
  }
  onSubmit(){
    this.getweatherData(this.cityName);
    this.cityName = '';
  }
  private getweatherData(cityName:string){
    this.weatherService.getWeatherData(cityName).subscribe({
      next:(response)=>{
        this.weatherData =response;
        console.log(response);
      }
    });
  }
}
