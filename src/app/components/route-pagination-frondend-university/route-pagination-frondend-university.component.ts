import { HttpParams } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, ReplaySubject, of, combineLatest } from 'rxjs';
import { map, shareReplay, take, tap } from 'rxjs/operators';
import { __param } from 'tslib';
import { UniveristyModel } from '../../models/univeristy.model';
import { UniversitiesService } from '../../services/universities.service';

@Component({
  selector: 'app-route-pagination-frondend-university',
  styleUrls: ['./route-pagination-frondend-university.component.scss'],
  templateUrl: './route-pagination-frondend-university.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutePaginationFrondendUniversityComponent {

  readonly limitOptions$: Observable<number[]> = of([5, 10, 15, 20]);
  readonly universityList$: Observable<UniveristyModel[]> = this._universitiesService
    .getAll().pipe(
      tap((data) => this.getNumberOfUniversities(data))
    );

  private_numberOfUniversitySubject: ReplaySubject<number> =
    new ReplaySubject<number>(1);
  public numberOfUniversity$: Observable<number> =
    this.private_numberOfUniversitySubject.asObservable();


  readonly queryParams$: Observable<{pageSize: number, pageNumber: number}> = 
  this._activatedRoute.queryParams.pipe(
    map((params) => ({
      pageSize: !params['pageSize'] || params['pageSize'] <1 ? 5 : +params['pageSize'],
      pageNumber: !params['pageNumber'] || params['pageNumber'] <1 ? 5 : +params['pageNumber'],
    })),
    shareReplay(1)
  );

  readonly pages$: Observable<number[]> = combineLatest([
    this.queryParams$,
    this.numberOfUniversity$,
  ]).pipe(
    map(([params, numberOfUniversity]) =>{
      let pages: number[] = [];
      let numberOfPages: number = Math.ceil(numberOfUniversity / params.pageSize);
      for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
      }
      return pages;
    })
  );

  readonly UniversityListPaginated$: Observable<UniveristyModel[]> = combineLatest([
    this.universityList$,
    this.queryParams$,
  ]).pipe(
    map(([Uiversities, params]) =>
    Uiversities.slice(
      (params.pageNumber -1) * params.pageSize,
      params.pageNumber * params.pageSize
    ))
  )

  constructor(private _universitiesService: UniversitiesService, 
    private _activatedRoute: ActivatedRoute,
     private _router: Router) { }

  getNumberOfUniversities(universities: UniveristyModel[]): void {
    this.private_numberOfUniversitySubject.next(universities.length)
  }

 OnPageSelected(isSelected: boolean, size: number):  void {
  if(isSelected) {
    this.numberOfUniversity$
    .pipe(
      tap((numberOfUniversity) => {
        this.queryParams$
        .pipe(
          take(1),
          tap((params) => {
            this._router.navigate([], {
              queryParams: {
                pageNumber:
                params.pageNumber > Math.ceil(numberOfUniversity / size)
                ? Math.ceil(numberOfUniversity / size)
                : params.pageNumber,
                pageSize:size,
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
