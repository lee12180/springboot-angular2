import { Component, OnInit} from '@angular/core';
import { ProductService } from './product-list.service';
import { Product } from '../product'

@Component({
  moduleId: module.id,
  selector: 'product-list',
  templateUrl: 'product-list.component.html',
  providers: [ProductService]
})

export class ProductListComponent implements OnInit {
  errorMessage: string;
  productList: Array<Product>;
  productList2: Product[];

  constructor(private productService: ProductService) {
    //this.productList = [];
    //productService.getProductList().subscribe((productList:Array<Product>) => this.productList = productList);

  }
  
  getProductList():void {
    this.productService.getProductList()
                     .subscribe(
                       (productList:Array<Product>) => {
                         //console.log("productList###" + productList);
                         //console.log(productList);
                         //console.log(productList[0]);
                         this.productList = productList
                       },
                       error =>  this.errorMessage = <any>error);
  }

  getProductList2(): void {
    this.productService
        .getProductList2()
        .then(productList2 => this.productList2 = productList2);

        console.log('productList2 :: ' + this.productList);
  }


  // getProductList2():void {
  //   console.log('call component getProductList 2 ');
  //   this.productService.getProductList().then(productList => this.productList = productList);
  //   console.log('productList :: ' + this.productList);
  // }

  ngOnInit():void {
    console.log('call component ngOnInit ');
    this.getProductList();
    //this.getProductList2();
  }

}
