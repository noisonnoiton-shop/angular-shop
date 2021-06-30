import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from './cart.service';
import Cart from 'src/model/cart';
import Account from 'src/model/account';
import AccountBank from 'src/model/accountbank';
import Order from 'src/model/order';
import { isNavigationCancelingError } from '@angular/router/src/shared';

@Component({
  selector: 'app-content-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class CartComponent implements OnInit {

  cartList$: Observable<Cart[]>;
  session: Observable<Account>;
  bankInfo: Observable<AccountBank>;
  orderTemp: Observable<Order>;

  constructor(private cartService: CartService) { 
    cartService.cartTransfer.subscribe(item =>
      this.cartList$ = item
    );
  }

  ngOnInit(): void {
    this.getAccountSession();
    this.getCartsByAccountId('1');
    this.getBankInfo('1');
  }

  getAccountSession() {
    this.session = this.cartService.getAccountSession();
  }

  getCartsByAccountId(accountId: string) {
    this.cartList$ = this.cartService.getCartsByAccountId(accountId);
  }

  getBankInfo(accountId: string) {
    this.bankInfo = this.cartService.getAccountBankByAccountId(accountId);
  }

  createOrder() {

    this.cartList$.forEach((cart: Cart[]) => {
      console.log(cart)
    })
    // this.cartService.createOrder(this.orderTemp);
  }

}
