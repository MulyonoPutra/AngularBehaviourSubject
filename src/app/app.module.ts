import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import {UsersService} from './services/user.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  providers:[UsersService],
  declarations: [ AppComponent, HelloComponent, OneComponent, TwoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
