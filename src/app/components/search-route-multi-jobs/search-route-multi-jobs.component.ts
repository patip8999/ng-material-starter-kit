import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import {  switchMap } from 'rxjs/operators';
import { JobModel } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-search-route-multi-jobs',
  styleUrls: ['./search-route-multi-jobs.component.scss'],
  templateUrl: './search-route-multi-jobs.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchRouteMultiJobsComponent {
  readonly searchForm: FormGroup = new FormGroup({ keyWord: new FormControl('') });
  readonly searchKey: Observable<string | undefined> = this._activatedRoute.queryParams.pipe(
    map((params) => params['search'], startWith(''))
  );
  readonly jobs$: Observable<JobModel[]> = this.searchKey.pipe(
    switchMap((data) =>
      this._jobsService
        .getAll()
        .pipe(
          map((jobs) =>
            jobs.filter(
              (job) =>
                job.description.toLowerCase().includes(data?.toLowerCase()!) ||
                job.title.toLowerCase().includes(data?.toLowerCase()!)
            )
          )
        )
    )
  );

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _jobsService: JobsService) {}

  onSearchFormSubmitted(searchForm: FormGroup): void {
    this._router.navigate([], {
      queryParams: {
        search: searchForm.value.keyWord
      }
    });
  }
}