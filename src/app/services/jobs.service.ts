import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobModel } from '../models/job.model';
import { JobTagModel } from '../models/job-tag.model';

@Injectable({ providedIn: 'root' })
export class JobsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<JobModel[]> {
    return this._httpClient.get<JobModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-posts');
  }

  getAllJobTags(): Observable<JobTagModel[]> {
    return this._httpClient.get<JobTagModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/job-tags');
  }
}
