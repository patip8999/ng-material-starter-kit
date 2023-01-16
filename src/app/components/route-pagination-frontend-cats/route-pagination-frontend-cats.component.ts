import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject, of, combineLatest } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { CatModel } from '../../models/cat.model';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-route-pagination-frontend-cats',
  styleUrls: ['./route-pagination-frontend-cats.component.scss'],
  templateUrl: './route-pagination-frontend-cats.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutePaginationFrontendCatsComponent {
  readonly limitOptions$: Observable<number[]> = of([3, 6, 9]);

  readonly catsList$: Observable<CatModel[]> = this._catsService
    .getAllCats()
    .pipe(tap((data) => this.getNumberOfCats(data)));

  private _numberOfCatsSubject: ReplaySubject<number> =
    new ReplaySubject<number>(1);
  public numberOfCats$: Observable<number> =
    this._numberOfCatsSubject.asObservable();

  readonly queryParams$: Observable<{ pageSize: number; pageNumber: number }> =
    this._activatedRoute.queryParams.pipe(
      map((params) => ({
        pageSize:
          !params['pageSize'] || params['pageSize'] < 1
            ? 3
            : +params['pageSize'],
        pageNumber:
          !params['pageNumber'] || params['pageNumber'] < 1
            ? 1
            : +params['pageNumber'],
      })),
      shareReplay(1)
    );

  readonly pages$: Observable<number[]> = combineLatest([
    this.queryParams$,
    this.numberOfCats$,
  ]).pipe(
    map(([params, numberOfCats]) => {
      let pages: number[] = [];
      let numberOfPages: number = Math.ceil(numberOfCats / params.pageSize);
      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
      }
      return pages;
    })
  );

  readonly catsListPaginated$: Observable<CatModel[]> = combineLatest([
    this.catsList$,
    this.queryParams$,
  ]).pipe(
    map(([cats, params]) =>
      cats.slice(
        (params.pageNumber - 1) * params.pageSize,
        params.pageNumber * params.pageSize
      )
    )
  );

  constructor(
    private _catsService: CatsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  getNumberOfCats(cats: CatModel[]): void {
    this._numberOfCatsSubject.next(cats.length);
  }

  OnPageSelected(isSelected: boolean, size: number): void {
    if (isSelected) {
      this.numberOfCats$
      .pipe(
        tap((numberOfCats) => {
          this.queryParams$
          .pipe(
            take(1),
            tap((params) => {
              this._router.navigate([], {
                queryParams: {
                  pageNumber:
                    params.pageNumber > Math.ceil(numberOfCats / size)
                      ? Math.ceil(numberOfCats / size)
                      : params.pageNumber,
                  pageSize: size,
                },
              });
            })
          )
          .subscribe;
        })
      ).
      subscribe;
    }
  }
}
