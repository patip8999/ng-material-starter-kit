import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { combineLatest, map, Observable, startWith } from 'rxjs';
import { UniveristyModel } from 'src/app/models/univeristy.model';
import { UniversitiesService } from 'src/app/services/universities.service';

@Component({
  selector: 'app-search-university-by-country',
  styleUrls: ['./search-university-by-country.component.scss'],
  templateUrl: './search-university-by-country.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchUniversityByCountryComponent {
  readonly search: FormControl = new FormControl('');
  readonly Universities$: Observable<UniveristyModel[]> =combineLatest([
    this.search.valueChanges.pipe(
      startWith('')
    ),
    this._universitiesService.getAllByCountry(''),
  ]).pipe(
    map(([search, universities]) => {
      if (!startWith) {
        return [];
      }
      return universities.filter((university) => university.country.toLowerCase().includes(search.toLowerCase()))
    }
  )
  )
  constructor(private _universitiesService: UniversitiesService) {
  }
}
