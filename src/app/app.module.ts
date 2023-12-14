import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrafficMapComponent } from './components/traffic-map/traffic-map.component';
import { TrafficDetailsComponent } from './components/traffic-details/traffic-details.component';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { AuthGuard } from './guards';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    TrafficMapComponent,
    TrafficDetailsComponent,
    UserCommentsComponent,
    LoginComponent,
    SignupComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
