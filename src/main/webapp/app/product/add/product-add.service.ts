import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';
import {FormGroup} from '@angular/forms';

@Injectable()
export class ProductAddService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private productUrl = 'api/product';

    http:Http;
    constructor(http:Http) {
        this.http = http;
    }

    addProduct(productForm: any) {
        console.log('ProductAddService addProduct~!!');
        console.log('ProductAddService addProduct  prdouctForm productCode ' + productForm.productCode);
        console.log('ProductAddService addProduct  prdouctForm productName ' + productForm.productName);

        return this.http.post(this.productUrl + '/add', JSON.stringify(productForm),{headers:this.headers})
            .map((res:Response) => {
                console.log("res :: " + res);
                console.log(res.json());
                         

                console.log('end service addProduct ~!');
                //return user;
            });

  }

}