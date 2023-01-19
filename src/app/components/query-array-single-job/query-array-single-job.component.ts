import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { JobTagModel } from 'src/app/models/job-tag.model';
import { JobWithTagsQueryModel } from 'src/app/query-models/job-with-tags.query-model';
import { JobModel } from '../../models/job.model';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-query-array-single-job',
  templateUrl: './query-array-single-job.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QueryArraySingleJobComponent {
  readonly jobWithTags$: Observable<JobWithTagsQueryModel[]> = combineLatest([
    this._jobsService.getAll(),
    this._jobsService.getAllJobTags(),
  ]).pipe(
    map(([jobs, jobTags]: [JobModel[], JobTagModel[]]) => {
      return jobs.map((job) => this._mapJobWithTagsQuery(job, jobTags));
    })
  );



  constructor(private _jobsService: JobsService) {}
  private _mapJobWithTagsQuery(
    job: JobModel,
    jobTags: JobTagModel[]
  ): JobWithTagsQueryModel {
    const jbTagsMap = jobTags.reduce((a, c) => {
      return { ...a, [c.id]: c };
    }, {}) as Record<string, JobTagModel>;

    return {
      title: job.title,
      jobTags: job.jobTagIds?.map((jId) => jbTagsMap[jId].name),
    };
  }
}
