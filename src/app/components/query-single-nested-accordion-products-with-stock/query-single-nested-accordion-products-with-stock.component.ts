import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { StoreModel } from 'src/app/models/store.model';
import { ProductQueryModel } from 'src/app/query-models/product.query-model';
import { ProductThreeModel } from '../../models/product-three.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-query-single-nested-accordion-products-with-stock',
  templateUrl: './query-single-nested-accordion-products-with-stock.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuerySingleNestedAccordionProductsWithStockComponent {
  readonly products$: Observable<ProductQueryModel[]> = this._productsService.getAllProductsThree().pipe(
    switchMap((products) => {
      const productIds: string[] = products.reduce((a,c) => [...a,c.id], [] as string[]);
      return this._productsService.getProductsWithStock(productIds).pipe(
        map((productMap) => products.map((product) => this._mapProduct(product, productMap)))
      )
    })
  )

  constructor(private _productsService: ProductsService) {
  }

  private _mapProduct(product: ProductThreeModel, productMap: Record<string, StoreModel[]>) : ProductQueryModel {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
      stock: productMap[product.id].reduce((a,c) => {
        return a + c.stock
      }, 0)
    }
  }
    }
  

