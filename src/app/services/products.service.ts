import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
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


getAll(): Observable<ProductModel[]> {
  return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products');
}

delete(id: string): Observable<ProductModel> {
  return this._httpClient.delete<ProductModel>('https://fakestoreapi.com/products/' + id);
}

getOne(id: string): Observable<ProductModel> {
  return this._httpClient.get<ProductModel>(`https://fakestoreapi.com/products/${id}`);
}
getAllSearch(search: string): Observable<ProductModel[]> {
  return this._httpClient.get<ProductModel[]>('https://fakestoreapi.com/products').pipe(
    map(products => products.filter(product => product.title.startsWith(search)))
  );
}

}
