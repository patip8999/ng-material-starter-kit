import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CatModel } from '../models/cat.model';
import { CityModel } from '../models/city.model';

@Injectable({ providedIn: 'root' })
export class CatsService {
  constructor(private _httpClient: HttpClient) {
  }

 

  getAllCities(): Observable<CityModel[]> {
    return this._httpClient.get<CityModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cities');
  }

  getAllPrice(): Observable<CatModel[]> {
    return this._httpClient.get<CatModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cats');
  }

  getAllCats(): Observable<CatModel[]> {
    return this._httpClient.get<CatModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/cats');
  }
}




