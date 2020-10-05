import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-brand',
  templateUrl: './product-brand.component.html',
  styleUrls: ['./product-brand.component.css']
})
export class ProductBrandComponent implements OnInit {
  product: any;
  params: any;
  // tslint:disable-next-line:variable-name
  constructor(private _httpService: HttpService, private _route: ActivatedRoute) { }

  ngOnInit() {
    this._route.params.subscribe(params => this.params = params);
    this.product = this.getOneProductFromService(this.params);
  }
  getOneProductFromService(product) {
    console.log(this.params)
    const observable = this._httpService.getOneProduct(product);
    observable.subscribe( data => this.product = data);
  }
}
