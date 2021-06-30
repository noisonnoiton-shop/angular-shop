import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import Category from 'src/model/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  backend: String = environment.backend;

  constructor(private http: HttpClient) { }

  getCategory(): Observable<Category[]> {
    return this.http.get<Category[]>(this.backend + '/v1/categories', { });
  }
}
