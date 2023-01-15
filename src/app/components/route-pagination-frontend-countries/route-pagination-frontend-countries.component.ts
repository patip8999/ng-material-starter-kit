import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  Observable,
  ReplaySubject,
  of,
  map,
  shareReplay,
  combineLatest,
  tap,
  take,
} from 'rxjs';
import { CityModel } from '../../models/city.model';
import { CitiesService } from '../../services/cities.service';

@Component({
  selector: 'app-route-pagination-frontend-countries',
  styleUrls: ['./route-pagination-frontend-countries.component.scss'],
  templateUrl: './route-pagination-frontend-countries.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutePaginationFrontendCountriesComponent {
  readonly limitOpts$: Observable<number[]> = of([5, 10, 15]);
  readonly cityList$: Observable<CityModel[]> = this._citiesService
    .getAll()
    .pipe(tap((data) => this.getNumberOfCities(data)));

  private _numberOfCitiesSubject: ReplaySubject<number> =
    new ReplaySubject<number>(1);
  public numberOfCities$: Observable<number> =
    this._numberOfCitiesSubject.asObservable();

  readonly queryParams$: Observable<{ pageSize: number; pageNumber: number }> =
    this._activatedRoute.queryParams.pipe(
      map((params) => ({
        pageSize:
          !params['pageSize'] || params['pageSize'] < 1
            ? 5
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
    this.numberOfCities$,
  ]).pipe(
    map(([params, numberOfCities]) => {
      let pages: number[] = [];
      let numberOfPages: number = Math.ceil(numberOfCities / params.pageSize);
      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
      }
      return pages;
    })
  );

  readonly cityListPaginated$: Observable<CityModel[]> = combineLatest([
    this.cityList$,
    this.queryParams$,
  ]).pipe(
    map(([cities, params]) =>
      cities.slice(
        (params.pageNumber - 1) * params.pageSize,
        params.pageNumber * params.pageSize
      )
    )
  );

  constructor(
    private _citiesService: CitiesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {}

  getNumberOfCities(cities: CityModel[]): void {
    this._numberOfCitiesSubject.next(cities.length);
  }

  onPageSelected(isSelected: boolean, size: number): void {
    if (isSelected) {
      this.numberOfCities$
        .pipe(
          tap((numberOfCities) => {
            this.queryParams$
              .pipe(
                take(1),
                tap((params) => {
                  this._router.navigate([], {
                    queryParams: {
                      pageNumber:
                        params.pageNumber > Math.ceil(numberOfCities / size)
                          ? Math.ceil(numberOfCities / size)
                          : params.pageNumber,
                      pageSize: size,
                    },
                  });
                })
              )
              .subscribe();
          })
        )
        .subscribe();
    }
  }
}
