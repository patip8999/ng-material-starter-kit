import { HttpParams } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject, of, combineLatest } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';

@Component({
  selector: 'app-route-pagination-frondend-beers',
  styleUrls: ['./route-pagination-frondend-beers.component.scss'],
  templateUrl: './route-pagination-frondend-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutePaginationFrondendBeersComponent {
  readonly limitOptions$: Observable<number[]> = of([5, 10, 15, 20]);
  readonly beerList$: Observable<BeerModel[]> = this._beersService
    .getAll()
    .pipe(tap((data) => this.getNumberOfUniversities(data)));
  private _numberOfBeersSubject: ReplaySubject<number> =
    new ReplaySubject<number>(1);
  public numberOfBeers$: Observable<number> =
    this._numberOfBeersSubject.asObservable();


  readonly queryParams$: Observable<{pageSize: number, pageNumber: number}> =
   this._activatedRoute.queryParams.pipe(
    map((params) => ({
      pageSize: !params['pageSize'] || params['pageSize'] <1 ? 5 : +params['pageSize'],
      pageNumber: !params['pageNumber'] || params['pageNumber'] <1 ? 5 : +params['pageNumber']
    })),
    shareReplay(1)
   );

   readonly pages$: Observable<number[]> = combineLatest ([
    this.queryParams$,
    this.numberOfBeers$
   ]).pipe(
    map(([params, numberOfBeers]) => {
      let pages: number[] = [];
      let numberOfPages: number = Math.ceil(numberOfBeers / params.pageSize);
      for (let i = 1; i <= numberOfBeers; i++) {
        pages.push(i);
      }
      return pages;
    })
   );

   readonly BeersListPaginated$: Observable<BeerModel[]> = combineLatest ([
    this.beerList$,
    this.queryParams$
   ]).pipe(
    map(([beers, params]) => 
    beers.slice(
      (params.pageNumber -1) * params.pageSize,
      params.pageNumber * params.pageSize
    ))
   )

  constructor(
    private _beersService: BeersService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  getNumberOfUniversities(beers: BeerModel[]): void {
    this._numberOfBeersSubject.next(beers.length);
  }

  onPageSelected(isSelected: boolean, size: number) : void {
    if(isSelected) {
      this.numberOfBeers$
      .pipe(
        tap((numberOfBeers) => {
          this.queryParams$
          .pipe(
            take(1),
            tap((params) => {
              this._router.navigate([], {
                queryParams: {
                  pageNumber:
                  params.pageNumber > Math.ceil(numberOfBeers / size)
                  ? Math.ceil(numberOfBeers / size)
                  : params.pageNumber,
                  pageSize: size,
                }
              })
            })
          )
          .subscribe();
        })
      )
      .subscribe();
    }
  }
}
