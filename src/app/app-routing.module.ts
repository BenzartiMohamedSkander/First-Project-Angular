import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddUserComponent } from './dashboard/add-user/add-user.component';
import { ListUserComponent } from './dashboard/list-user/list-user.component';
import { WeatherApiComponent } from './dashboard/weather-api/weather-api.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'dashboard', component: DashboardComponent ,
  children:[
     {path: 'adduser', component: AddUserComponent},
     {path: 'listuser', component: ListUserComponent},
     {path: 'weather', component: WeatherApiComponent},


   ] 

   },
 
  { path: '', component: LandingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
