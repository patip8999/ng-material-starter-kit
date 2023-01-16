import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-route-sort-single-products-backend',
  styleUrls: ['./route-sort-single-products-backend.component.scss'],
  templateUrl: './route-sort-single-products-backend.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteSortSingleProductsBackendComponent {
  readonly sort$: Observable<string[]> = of(['asc', 'desc']);
  readonly productList$: Observable<ProductModel[]> = this._activatedRoute.queryParams.pipe(
    map((data) => data['sort']),
    switchMap((data) => this._productsService.getAllSorted(data))
  );

  constructor(private _activatedRoute: ActivatedRoute, private _productsService: ProductsService) {
  }
}
