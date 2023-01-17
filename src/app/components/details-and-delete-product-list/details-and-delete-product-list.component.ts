import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, Observable, Subject, switchMap } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-details-and-delete-product-list',
  styleUrls: ['./details-and-delete-product-list.component.scss'],
  templateUrl: './details-and-delete-product-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsAndDeleteProductListComponent {
  readonly ProductList$: Observable<ProductModel[]> = this._productsService.getAll();
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<ProductModel[]> = this.refresh$.pipe(switchMap(data => this._productsService.getAll()
  ));
  private _selectedProductIdSubject: Subject<string> = new Subject<string>();
  public selectedProductId$: Observable<string> = this._selectedProductIdSubject.asObservable();
  readonly details$: Observable<ProductModel> = this.selectedProductId$.pipe(switchMap(data => this._productsService.getOne(data)));

  constructor(private _productsService: ProductsService) {
  }

  delete(id: string): void {
    this._productsService.delete(id).subscribe(() => this._refreshSubject.next());
  }

  selectProduct(id: string): void {
    this._selectedProductIdSubject.next(id);
  }
}

