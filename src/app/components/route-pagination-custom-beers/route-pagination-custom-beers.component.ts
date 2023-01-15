import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-route-pagination-custom-beers',
  styleUrls: ['./route-pagination-custom-beers.component.scss'],
  templateUrl: './route-pagination-custom-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutePaginationCustomBeersComponent {
  readonly limits$: Observable<number[]> = of([5, 10, 15])
  readonly page$: Observable<number[]> = of([1, 2, 3, 4, 5])
  readonly queryParams$: Observable<{ pageNumber: number, pageSize: number }> =
    this._activatedRoute.queryParams.pipe(
      map((params) => ({
        pageNumber: !params['page'] || params['page'] < 0 ? 1 : +params['page'],
        pageSize: !params['limit'] || params['limit'] < 0 ? 5 : +params['limit'],
      })),
      shareReplay(1),
      tap((data) => this.setFormValues(data.pageNumber, data.pageSize))
    );

  readonly paginatorForm: FormGroup = new FormGroup({ limit: new FormControl(), page: new FormControl() });
  readonly beers$: Observable<BeerModel[]> = this.queryParams$.pipe(
    switchMap((data) =>
      this._beersService.getAllPagination(data.pageNumber, data.pageSize)));

  constructor(private _activatedRoute: ActivatedRoute, private _beersService: BeersService, private _router: Router) {
  }
  ngAfterViewInit() {
    this.paginatorForm.valueChanges.subscribe((values) =>
      this._router.navigate([], {
        queryParams: {
          page: values.page,
          limit: values.limit
        }
      })
    );
  }
  setFormValues(pageNumber: number, pageSize: number): void {
    this.paginatorForm.setValue({
      limit: pageSize,
      page: pageNumber
    })
  }


}
