import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { TaskServiceService } from './task-service.service';
// import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
    NgbModule
  ],
  providers:[TaskServiceService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
