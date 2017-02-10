import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';

import {HeaderComponent} from "./include/header.component";

import { routes } from './app.routes';

import { LoginModule } from './login/login.module';

import {ProductListModule} from "./product/list/product-list.module";
import {ProductAddModule } from "./product/add/product-add.module"

//import {LicenseListModule} from "./license/list/license-list.module";

import {LicenseListComponent } from "./license/list/license-list.component"

import { AccountEventsService } from './account/account.event.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, LoginModule, ProductListModule, ProductAddModule, //LicenseListModule, 
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  declarations: [ AppComponent, HeaderComponent, LicenseListComponent ],
  bootstrap:    [ AppComponent, HeaderComponent ],
  providers: [AccountEventsService]
})
export class AppModule { }
