import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import Cart from 'src/model/cart';
import Account from 'src/model/account';
import AccountBank from 'src/model/accountbank';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  backend: String = environment.backend;

  carts = new Subject<Observable<Cart[]>>();
  cartTransfer = this.carts.asObservable();

  constructor(private http: HttpClient) { }

  getAccountSession(): Observable<Account> {
    return this.http.get<Account>(this.backend + '/v1/accounts/session', { });
  }

  getCartsByAccountId(accountId): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.backend + '/v1/carts/account/' + accountId, { });
  }

  getAccountBankByAccountId(accountId): Observable<AccountBank> {
    return this.http.get<AccountBank>(this.backend + '/v1/accountbanks/' + accountId, { });
  }

  createOrder(Order): Observable<boolean> {
    return this.http.put<boolean>(this.backend + '/v1/orders', {
      responseType: 'json',
      observe: Order
     });
  }
}
