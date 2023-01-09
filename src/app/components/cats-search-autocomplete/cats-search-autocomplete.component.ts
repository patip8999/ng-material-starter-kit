import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BreakPointRegistry } from '@angular/flex-layout';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  combineLatest,
  debounceTime,
  map,
  shareReplay,
  startWith,
  switchMap,
} from 'rxjs';

import { CatModel } from '../../models/cat.model';
import { CityModel } from '../../models/city.model';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-cats-search-autocomplete',
  styleUrls: ['./cats-search-autocomplete.component.scss'],
  templateUrl: './cats-search-autocomplete.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatsSearchAutocompleteComponent {
  readonly search: FormGroup = new FormGroup({
    city: new FormControl(),
    price: new FormControl(),
    breed: new FormControl(),
  });

  readonly searchFormValues = this.search.valueChanges.pipe(
    startWith({
      city: '',
      price: '',
      searchTerm: '',
    }),
    shareReplay(1)
  );
  readonly priceAutocomplete$: Observable<CatModel[]> =
    this._catsService.getAllPrice();
  readonly cityAutocomplete$: Observable<CityModel[]> =
    this._catsService.getAllCities();

  readonly filteredPrice$: Observable<CatModel[]> = combineLatest([
    this.searchFormValues,
    this._catsService.getAllPrice(),
  ]).pipe(
    map(([search, price]) => price.filter((cats) => cats.price + search.price))
  );

  readonly filteredCity$: Observable<CityModel[]> = combineLatest([
    this.searchFormValues,
    this._catsService.getAllCities(),
  ]).pipe(
    map(([search, name]) =>
      name.filter((cats) =>
        cats.name
          .toLowerCase()
          .includes(search.name ? search.name.toLowerCase() : '')
      )
    )
  );
  readonly list$: Observable<
  
  {
    cityName: string;
    price: string;
    breed: string;
  }[]
   > = combineLatest([
    this.searchFormValues,
    this.cityAutocomplete$,
    this._catsService.getAllCats(),
  ]).pipe(
    map(([search, city, cats]) => {
      const cityMap = city.reduce((a, c) => {
        return { ...a, [c.name]: c };
      }, {}) as Record<string, CityModel>;

      return cats.filter(
        (cat) =>
          (!search.city || cat.cityName === search.cityName) &&
          (!search.price || cat.price === search.price) &&
          (!search.breed || cat.breed === search.breed)
      )
      .map((cat)=>{
      return {
        price: cat.price,
        breed: cat.breed,
        cityName: cityMap[cat.name]?.name,
        
        

      };
    });
    })
  );

  constructor(private _catsService: CatsService) {}

}
