import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, debounceTime, map, Observable } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-search-product-empty-state',
  styleUrls: ['./search-product-empty-state.component.scss'],
  templateUrl: './search-product-empty-state.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchProductEmptyStateComponent {
  readonly search: FormGroup = new FormGroup({ title: new FormControl() });
  private _startWithSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public startWith$: Observable<string> = this._startWithSubject.asObservable();

  readonly list$: Observable<ProductModel[]> = combineLatest([
    this._productsService.getAllSearch(''),
    this.startWith$,
  ]).pipe(
    debounceTime(1000),
    map(([products, startWith]) => {
      if (!startWith) {
        return [];
      }
      return products.filter(product => product.title.startsWith(startWith))
    })
  )

  constructor(private _productsService: ProductsService) {

  }

  onSearchSubmitted(search: FormGroup): void {
    this._startWithSubject.next(search.get('title')?.value);
  }
}


