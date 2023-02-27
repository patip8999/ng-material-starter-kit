import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';

interface PaginatorData {
  pageSize: number;
  pageNumber: number;
}

@Component({
  selector: 'app-route-limit-single-products',
  styleUrls: ['./route-limit-single-products.component.scss'],
  templateUrl: './route-limit-single-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RouteLimitSingleProductsComponent implements AfterViewInit {
  readonly limits$: Observable<number[]> = of([5, 10, 15]);
  readonly queryParams$: Observable<number> =
    this._activatedRoute.queryParams.pipe(
      map(
        (params) => (params['limit'] ? params['limit'] : 5),
        tap((limit) => this.limitForm.patchValue(limit))
      )
    );

  public limitForm: FormControl = new FormControl(0);

  readonly productList$: Observable<ProductModel[]> = this.queryParams$.pipe(
    switchMap((data) => this._productsService.getAllByLimit(+data))
  );

  constructor(
    private _router: Router,
    private _productsService: ProductsService,
    private _activatedRoute: ActivatedRoute
  ) {}

  onLimitSelected(limit: number): void {
    this._router.navigate([], { queryParams: { limit } });
  }
/* na formConrol robimy: */
  ngAfterViewInit(): void {
    this.limitForm.valueChanges
      .pipe(
        tap((limit) =>
          this._router.navigate([], {
            queryParams: { limit },
            relativeTo: this._activatedRoute,
          })
        )
      )
      .subscribe();
  }
}
