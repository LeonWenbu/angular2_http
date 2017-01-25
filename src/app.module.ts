import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserXhr, Http, Response, Headers, RequestOptionsArgs, HttpModule } from '@angular/http';

import { AppComponent }  from './AppComponent';
import { Transporter } from './transporters/transporter';
import { BookService } from './services/book.service';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  providers:[ Transporter, BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }