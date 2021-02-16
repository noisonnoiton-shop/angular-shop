import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Product from 'src/model/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-content-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class ShopComponent implements OnInit {

  productList$: Observable<Product[]>;
  products: Product[];

  constructor(private shopService: ShopService) {
    shopService.productTransfer.subscribe(item =>
      this.productList$ = item
    );
    this.getProductList();
  }

  ngOnInit(): void { }

  getProductList() {
    this.productList$ = this.shopService.getProduct();
  }

  getProductListByCategoryId(categoryId: string) {
    this.productList$ = this.shopService.getProductByCategoryId(categoryId);
  }
}
