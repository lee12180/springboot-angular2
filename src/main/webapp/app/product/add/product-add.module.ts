import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ProductAddComponent }   from './product-add.component';

@NgModule({
    imports: [FormsModule, ReactiveFormsModule, BrowserModule],
    exports: [],
    declarations: [ProductAddComponent],
    providers: [],
})
export class ProductAddModule { }
