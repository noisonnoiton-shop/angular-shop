import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import Product from 'src/model/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  backEndServer: String = 'localhost';

  products = new Subject<Observable<Product[]>>();
  productTransfer = this.products.asObservable();

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://' + this.backEndServer + ':8090/product/v1/products', { });
  }

  getProductByCategoryId(categoryId): Observable<Product[]> {
    return this.http.get<Product[]>('http://' + this.backEndServer + ':8090/product/v1/products/category/' + categoryId, { });
  }

  getProductAllSub() {
    this.products.next(this.http.get<Product[]>('http://' + this.backEndServer + ':8090/product/v1/products', { }));
  }

  getProductByCategoryIdSub(categoryId) {
    this.products.next(this.http.get<Product[]>('http://' + this.backEndServer + ':8090/product/v1/products/category/' + categoryId, { }));
  }

}
