import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, Observable,  } from 'rxjs';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-route-pagination-simple-beers',
  styleUrls: ['./route-pagination-simple-beers.component.scss'],
  templateUrl: './route-pagination-simple-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutePaginationSimpleBeersComponent {
  /* properities-activatedRoute-queryparams: */
  
  readonly currentPage$: Observable<number> =
    this._activatedRoute.queryParams.pipe(
      map((params) => (params['page'] ? +params['page'] : 1))
    );


    readonly beers$: Observable<BeerModel[]> = this.currentPage$.pipe(
      switchMap((curPage) => 
    this._beersService.getAllPagination(curPage, 10)),
    shareReplay(1),
    );


/* Żeby się wyłączał przycisk na ostatniej stronie: */
readonly paginationState$: Observable<{isFirst: boolean, isLast: boolean}> = combineLatest([
  this.currentPage$,
  this.beers$
]).pipe(
  map(([curPage, beers]) =>({
  isFirst: curPage ===1,
  isLast: beers.length < 10
})));

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _beersService: BeersService,
    private _router: Router
  ) {}


onPrevClicked(): void {
  this.currentPage$
  .pipe(
    take(1),
    tap((curPage) =>
    this._router.navigate([], {
      queryParams: {
        page: curPage -1,
      },
    }) )
  )
  .subscribe();
}


onNextClicked(): void {
  this.currentPage$
  .pipe(
    take(1),
    tap((curPage) =>
    this._router.navigate([], {
      queryParams: {
        page: curPage +1,
      },
    }) )
  )
  .subscribe();
}
}