import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-route-filter-single-products-backend',
  styleUrls: ['./route-filter-single-products-backend.component.scss'],
  templateUrl: './route-filter-single-products-backend.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RouteFilterSingleProductsBackendComponent {
  readonly categories$: Observable<string[]> = this._productsService.getAllCategories();
  readonly productList$: Observable<ProductModel[]> = this._activatedRoute.params.pipe(
    map((params) => params['category']),
    switchMap((data) => this._productsService.getAllInCategory(data))
  );

  constructor(private _productsService: ProductsService, private _activatedRoute: ActivatedRoute) {}
}