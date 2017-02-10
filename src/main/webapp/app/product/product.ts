import * as _ from 'lodash'

export class Product {
    productId:number;
    productCode:string;
    productName:string; 
    productDesc:String;
    regDate:String;
	regUserid:String;

     constructor(product?:{productId:number, productCode:string, productName:string, productDesc:String,
    regDate:String, regUserid:String}) {
        if(product) {
            _.assignIn(this, product);
        }
        //this.productId = product.productId;
        // this.productCode = product.productCode;
        // this.productName = product.productName;
        // this.productDesc = product.productDesc;
        // this.regDate = product.regDate;
        // this.regUserid = product.regUserid;
     }
}