import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http: HttpClient) { }
  getWeather( country : String) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='+country+'&APPID=4f8486b3635789634da72e20819e0155')
  }
}
