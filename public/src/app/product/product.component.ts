import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = [];
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.products = this.getProductsFromService();
  }
  getProductsFromService() {
    const observable = this._httpService.getProducts();
    observable.subscribe(data =>  this.products = data);
  }
}
