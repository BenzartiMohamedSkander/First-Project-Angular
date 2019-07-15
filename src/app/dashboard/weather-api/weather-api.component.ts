import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-weather-api',
  templateUrl: './weather-api.component.html',
  styleUrls: ['./weather-api.component.css']
})
export class WeatherApiComponent implements OnInit {

  weathers: Object;
  

  weatherForm: FormGroup;
   

  constructor(private data : DataService,private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();

 
  }

  initForm() {
    this.weatherForm = this.formBuilder.group({
      countryName: ['', Validators.required],
     
    });
  }

  onSearch(){
    const countryName = this.weatherForm.get('countryName').value;


    this.data.getWeather(countryName).subscribe(data => {
      this.weathers = data
      console.log(this.weathers);
    }
  );


  }

  onConvert(tempK : number){
  var tempC : number;
  tempC = tempK - 273,15 ;

  return (Math.round(tempC));
  }

}
