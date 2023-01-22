import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, forkJoin, from, BehaviorSubject } from 'rxjs';
import { concatMap, map, switchMap, take, tap } from 'rxjs/operators';
import { ProductsWithCategoriesQueryModel } from 'src/app/query-models/products-with-categories.query-model';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-query-nested-sequential-list-products-with-categories',
  templateUrl:
    './query-nested-sequential-list-products-with-categories.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryNestedSequentialListProductsWithCategoriesComponent {
  readonly product$: Observable<ProductModel[]> =
    this._productsService.getAll();
  readonly productsByCategory$: Observable<string[]> =
    this._productsService.getAllCategoriesQuery('');

  /*    readonly productList$: Observable<any> = 
    this._productsService.getAll().pipe(switchMap((products) => from(products).pipe(concatMap((product) =>
    this._productsService.getAllCategoriesQuery(product.category).pipe(map((prodyctsByCategory) =>
    ({
      product: product,
      data: prodyctsByCategory
    })
    ))
    )))) */
/* 
  readonly productsList$: Observable<ProductsWithCategoriesQueryModel[]> =
    this._productsService.getAll().pipe(
      switchMap((products) =>
        forkJoin(
          products.map((product) =>
            this._productsService.getAllCategoriesQuery(product.category).pipe(
              map((productsByCategory) => ({
                product: product,
                data: productsByCategory,
              }))
            )
          )
        )
      )
    ); */

    private _productsWithCategorySubject: BehaviorSubject<ProductsWithCategoriesQueryModel[]> = new BehaviorSubject<ProductsWithCategoriesQueryModel[]>([]);

    public productsWithCategory$: Observable<ProductsWithCategoriesQueryModel[]> = this._productsWithCategorySubject.asObservable();
  
    readonly products$: Observable<ProductsWithCategoriesQueryModel> = this._productsService.getAllProducts().pipe(
      switchMap((products) => this._productsService.getProductsWithCategory(products)),
      tap((data) => this.addNextProductsWithCategory(data))
    );
  
    constructor(private _productsService: ProductsService) {
    }
  
    addNextProductsWithCategory(products: ProductsWithCategoriesQueryModel): void {
      this.productsWithCategory$.pipe(
        take(1),
        tap((prevProducts) => this._productsWithCategorySubject.next([...prevProducts, products]))
      ).subscribe()
    }
  }

 
