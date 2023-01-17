import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CryptoModel } from '../models/crypto.model';

@Injectable({ providedIn: 'root' })
export class CryptosService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<CryptoModel[]> {
    return this._httpClient.get<CryptoModel[]>('https://api2.binance.com/api/v3/ticker/24hr');
  }

  getAllAutocomplete(search: string): Observable<CryptoModel[]> {
    return this._httpClient.get<CryptoModel[]> ('https://api2.binance.com/api/v3/ticker/24hr').pipe(
      map(cryptos => cryptos.filter(crypto =>crypto.symbol.startsWith(search)))
    )
  };
}
