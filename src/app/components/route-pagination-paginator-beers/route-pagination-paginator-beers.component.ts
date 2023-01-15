import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { BeerModel } from '../../models/beer.model';
import { BeersService } from '../../services/beers.service';

interface PaginatorData {
  pageNumber: number;
  pageSize: number;
  pageSizeOptions: number[];
}

@Component({
  selector: 'app-route-pagination-paginator-beers',
  styleUrls: ['./route-pagination-paginator-beers.component.scss'],
  templateUrl: './route-pagination-paginator-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoutePaginationPaginatorBeersComponent {
  readonly paginatorData$: Observable<PaginatorData> =
    this._activatedRoute.queryParams.pipe(
      map((params) => ({
        pageNumber: params['pageNumber']
          ? Math.max(1, +params['pageNumber'])
          : 1,
        pageSize: params['pageSize'] ? Math.max(5 + params['pageSize']) : 5,
        pageSizeOptions: [5, 10, 15],
      })),
      shareReplay(1)
    );
  readonly beers$: Observable<BeerModel[]> = this.paginatorData$.pipe(
    switchMap((data) =>
      this._beersService.getAll(data.pageNumber, data.pageSize)
    )
  );

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _beersService: BeersService,
    private _router: Router
  ) {}

  onPageChanged(event: {pageIndex: number, pageSize: number}) : void {
    this._router.navigate([], {
      queryParams: {
        pageNumber: event.pageIndex +1,
        pageSize: event.pageSize
      },
    });
    
  }
}
