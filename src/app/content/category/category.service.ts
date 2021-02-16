import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Category from 'src/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  backEndServer: String = 'localhost';

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>('http://' + this.backEndServer + ':8090/product/v1/categories', { });
  }
}
