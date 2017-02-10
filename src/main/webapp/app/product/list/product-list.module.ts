import { NgModule }      from '@angular/core';
import {CommonModule} from "@angular/common";

import { ProductListComponent } from './product-list.component';
//import {ProductAddComponent } from "../add/product-add.component"

@NgModule({
    imports: [ CommonModule ],
    bootstrap: [ ProductListComponent ],
    declarations: [ ProductListComponent ],
})

export class ProductListModule { }
