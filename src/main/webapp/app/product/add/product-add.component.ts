import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';

import { ProductAddService } from './product-add.service';
import { Product } from '../product'

@Component({
    moduleId: module.id,
    selector: 'product-add',
    templateUrl: 'product-add.component.html',
    providers: [ProductAddService],
    styles: ['.product_label { color: red; }']
})

export class ProductAddComponent implements OnInit {
    productForm: FormGroup;
    productCode: FormControl;
    productName: FormControl;
    product: Product;


    constructor(private router: Router,form: FormBuilder, private productAddService: ProductAddService) {
        this.product = new Product();

        this.productForm = form.group({
            productCode: this.productCode,
            productName: this.productName
            
        });
    }

    addProduct() {
        // console.log('생성');
        // console.log(this.productForm);
        // console.log(this.productForm.value);
        // console.log(this.product);
        this.productAddService.addProduct(this.productForm.value).subscribe(() => this.router.navigate(['/product']));
    }

    ngOnInit() { }
}