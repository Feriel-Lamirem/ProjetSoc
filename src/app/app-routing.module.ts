// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { TrafficMapComponent } from './components/traffic-map/traffic-map.component';
import { AuthGuard } from './guards';
import { SignupComponent } from './components/auth/signup/signup.component';
import { TrafficDetailsComponent } from './components/traffic-details/traffic-details.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'map', component: TrafficMapComponent },
  { path: 'traffic-details', component: TrafficDetailsComponent },
  { path: 'user-comments', component: UserCommentsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
