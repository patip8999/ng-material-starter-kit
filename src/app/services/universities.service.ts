import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UniveristyModel } from '../models/univeristy.model';

@Injectable({ providedIn: 'root' })
export class UniversitiesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<UniveristyModel[]> {
    return this._httpClient.get<UniveristyModel[]>('http://universities.hipolabs.com/search?country=Poland');
  }

  getAllByCountry(country: string): Observable<UniveristyModel[]> {
    return this._httpClient.get<UniveristyModel[]>(`http://universities.hipolabs.com/search?country=${country}`);
  }
}
