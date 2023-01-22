import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, forkJoin, from, map, Observable } from 'rxjs';
import { ProductModel } from '../models/product.model';
import { ProductsWithCategoriesQueryModel } from '../query-models/products-with-categories.query-model';
import { ProductTwoModel } from '../models/product-two.model';
import { ProductThreeModel } from '../models/product-three.model';
import { StoreModel } from '../models/store.model';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  constructor(private _httpClient: HttpClient) {}

  getAllByLimit(limit: number): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(
      `https://fakestoreapi.com/products?limit=${limit}`
    );
  }

  getAllSorted(sort: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(
      'https://fakestoreapi.com/products?sort=' + sort
    );
  }

  getAllCategories(): Observable<string[]> {
    return this._httpClient.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }

  getAllCategoriesQuery(category: string): Observable<string[]> {
    return this._httpClient.get<string[]>(
      `https://fakestoreapi.com/products/category/${category}`
    );
  }

  getAllInCategory(category: string): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(
      'https://fakestoreapi.com/products/category/' + category
    );
  }

  getAll(): Observable<ProductModel[]> {
    return this._httpClient.get<ProductModel[]>(
      'https://fakestoreapi.com/products'
    );
  }

  getAllProducts(): Observable<ProductTwoModel[]> {
    return this._httpClient.get<ProductTwoModel[]>(
      'https://fakestoreapi.com/products'
    );
  }

  delete(id: string): Observable<ProductModel> {
    return this._httpClient.delete<ProductModel>(
      'https://fakestoreapi.com/products/' + id
    );
  }

  getOne(id: string): Observable<ProductModel> {
    return this._httpClient.get<ProductModel>(
      `https://fakestoreapi.com/products/${id}`
    );
  }
  getAllSearch(search: string): Observable<ProductModel[]> {
    return this._httpClient
      .get<ProductModel[]>('https://fakestoreapi.com/products')
      .pipe(
        map((products) =>
          products.filter((product) => product.title.startsWith(search))
        )
      );
  }
  getProductsWithCategory(
    products: ProductTwoModel[]
  ): Observable<ProductsWithCategoriesQueryModel> {
    return from(products).pipe(
      concatMap((product) =>
        this._httpClient
          .get<ProductTwoModel[]>(
            'https://fakestoreapi.com/products/category/' + product.category
          )
          .pipe(
            map((products) => ({
              id: product.id,
              title: product.title,
              price: product.price,
              others: products.map((other) => ({ title: other.title })),
            }))
          )
      )
    );
  }

  getAllProductsThree(): Observable<ProductThreeModel[]> {
    return this._httpClient.get<ProductThreeModel[]>(
      'https://636ce2d8ab4814f2b2712854.mockapi.io/products'
    );
  }

  getProductsWithStock(
    productIds: string[]
  ): Observable<Record<string, StoreModel[]>> {
    return forkJoin(
      productIds.map((productId) =>
        this._httpClient.get<StoreModel[]>(
          `https://636ce2d8ab4814f2b2712854.mockapi.io/products/${productId}/product-metadata`
        )
      )
    ).pipe(
      map((productsStock: StoreModel[][]) =>
        productsStock.reduce(
          (a, c, id) => ({ ...a, [productIds[id]]: c }),
          {} as Record<string, StoreModel[]>
        )
      )
    );
  }
}
