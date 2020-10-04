import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // tslint:disable-next-line:variable-name
  constructor(private _http: HttpClient) { }
  addProduct(newProduct) {
    return this._http.post('/products', newProduct);
  }
  getProducts() {
    return this._http.get('/products');
  }
  getOneProduct(product) {
    return this._http.get('/product/' + product);
  }
  deleteProduct(productID) {
    return this._http.delete('/products/' + productID);
  }
  editProduct(product) {
    return this._http.put('/products/' + product.id, product);
  }
}
