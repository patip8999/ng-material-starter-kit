import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllByLimit(limit:number): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(`https://fakestoreapi.com/products?limit=${limit}`)
}

getAllSorted(sort: string): Observable<ProductModel[]> {
  return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products?sort=' + sort)
}

getAllCategories(): Observable<string[]> {
  return this._httpClient.get<string[]>('https://fakestoreapi.com/products/categories');
}

getAllInCategory(category: string): Observable<ProductModel[]> {
  return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products/category/' + category);
}
}
