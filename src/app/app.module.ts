import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { TaskServiceService } from './task-service.service';
// import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Main/login/login.component';
import { SignupComponent } from './Main/signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    LoginComponent,
    SignupComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    NgbModule,
    ReactiveFormsModule
  ],
  providers:[TaskServiceService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
