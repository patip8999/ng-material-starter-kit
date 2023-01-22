import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';

import { BehaviorSubject, catchError, map, Observable, of, startWith, switchMap } from 'rxjs';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-query-loader-names',
  templateUrl: './query-loader-names.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryLoaderNamesComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(
    void 0
  );
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly names$: Observable<any> = this.refresh$.pipe(
   
    switchMap(() =>
      this._loaderService.getAllNames().pipe(
        map((data) => ({
          isLoading: false,
          value: data,
        })), startWith({isLoading: true}),
        catchError((error) => of({ isLoading: false, error: error})
      ))
    )
  );

  constructor(private _loaderService: LoaderService) {}

  refreshData(): void {
    this._refreshSubject.next(void 0);
  }
}
