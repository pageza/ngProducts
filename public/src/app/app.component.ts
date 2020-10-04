import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngProducts';
  newProduct: any;
  products: any = [] ;
  selectedProduct: any;
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) {  }
  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    this.newProduct = {details: '', category: '', brand: ''};
    // tslint:disable-next-line:no-unused-expression
    this.selectedProduct;
  }
  getProductsFromService() {
    const observable = this._httpService.getProducts();
    // observable.subscribe(data =>  console.log('this is the observable data: ',  data));
    observable.subscribe(data =>  this.products = data);
    console.log('this is after fetching products: ', this.products);
  }
  getOneProductFromService(product) {
    const observable = this._httpService.getOneProduct(product);
    observable.subscribe( data => this.selectedProduct = data);
  }
  addProductFromService() {
    const observable = this._httpService.addProduct({data: this.newProduct});
    observable.subscribe(data => console.log('posted: ', data));
    this.newProduct = {details: '', category: '', brand: ''};
  }
  deleteProductFromService(productID) {
    const observable = this._httpService.deleteProduct(productID);
    observable.subscribe(data => console.log('Deleted Product'));
  }
  editProductFromService(selectedProduct) {
    const observable = this._httpService.editProduct(selectedProduct);
    observable.subscribe(data => console.log('updated: ', data));
  }
}
