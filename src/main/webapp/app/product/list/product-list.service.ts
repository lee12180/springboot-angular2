import { Injectable } from '@angular/core';
import {Http,Response,Headers} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import {Product} from '../product';

@Injectable()
export class ProductService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private productUrl = 'api/product';  // URL to web api
    
    http:Http;
    constructor(http:Http) {
        this.http = http;
    }

    getProductList (): Observable<Array<Product>> {
        console.log('call service getProductList ~!');
        return this.http.get(this.productUrl + '/list')
            .map((res:Response) => {
                //console.log("res :: " + res);
                let productList:Array<Product> = [];
                let jsonResults:Array<any> = res.json();
                //console.log(jsonResults);
                
                jsonResults.forEach((jsonResult) => {
                    console.log("jsonResult ::");
                    console.log(jsonResult);
                    //console.log(new Product(jsonResult));

                    //let test = Object.assign(new Product(), jsonResult);

                    productList.push(new Product(jsonResult));
                    //console.log(productList);
                });

                console.log(productList);

                console.log('end service getProductList ~!');
                return productList;
            });

    }

    getProductList2(): Promise<Product[]> {
        console.log('call service getProductList2 ~!');
        return this.http.get(this.productUrl + '/list2')
               .toPromise()
               .then(response => response.json().data as Product[])
               .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || { };
    }


    // getProductList (): Observable<any> {
    //     console.log('call service getProductList ~!');
    //     let repos = this.http.get(this.productUrl + '/list');
    //     console.log(repos);
    //     return this.http.get(this.productUrl + '/list')
    //         .map(this.extractData)
    //         .catch(this.handleError);

    // }

    // getProductList():Observable<Array<Product>> {
    //     return this.http.get('http://localhost:7788/api/product/list')
    //         .map((res:Response) => {
    //             let users:Array<Product> = [];
    //             let jsonResults:Array<any> = res.json();
    //             jsonResults.forEach((jsonResult) => {
    //                 users.push(new Product(jsonResult));
    //             });
    //             return users;
    //         });
    // }
}