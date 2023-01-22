import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LoaderService {
  getAllNames(): Observable<string[]> {
    return of(['Bartek', 'Pati', 'Zuzia', 'Kapsel']).pipe(delay(2000), map((data) =>{
        if (Math.random()> 0.5) {
            throw new Error('Error!')
        }
        return data
  }));
}
}