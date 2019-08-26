import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ReactiveFormsModule } from '@angular/forms'
import { ConnectionService } from "./connection.service";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ConnectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
