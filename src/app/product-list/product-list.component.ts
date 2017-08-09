import { Component, OnInit, EventEmitter } from '@angular/core';
import {Product} from '../product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  inputs: ['productList'],
  outputs:['onProductSelected']
})
export class ProductListComponent implements OnInit {
  private currentProduct:Product;
  
  productList:Product[];
  
  onProductSelected:EventEmitter<Product>;

  constructor() { 
    this.onProductSelected = new EventEmitter(); 
  }

  ngOnInit() {
  }

  clicked(product:Product):void{
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product:Product):boolean{
    if(!product || !this.currentProduct) return false;
    return this.currentProduct.sku === product.sku;
  }

}
