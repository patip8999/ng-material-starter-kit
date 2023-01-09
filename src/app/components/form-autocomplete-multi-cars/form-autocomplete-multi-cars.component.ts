import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  Observable,
  combineLatest,
  map,
  shareReplay,
  startWith,
  tap,
} from 'rxjs';
import { BrandModel } from '../../models/brand.model';
import { SecurityFeatureModel } from '../../models/security-feature.model';
import { ComfortFeatureModel } from '../../models/comfort-feature.model';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-form-autocomplete-multi-cars',
  styleUrls: ['./form-autocomplete-multi-cars.component.scss'],
  templateUrl: './form-autocomplete-multi-cars.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormAutocompleteMultiCarsComponent {
  readonly searchForm: FormGroup = new FormGroup({
    brand: new FormControl(),
    securityFeature: new FormControl(),
    comfortFeature: new FormControl(),
  });

  readonly searchFormValues$ = this.searchForm.valueChanges.pipe(
    tap(console.log),
    startWith({
      brand: '',
      securityFeature: '',
      comfortFeature: '',
    }),
    shareReplay(1) /* // operator do subskrybowania tylko raz */
  );

  readonly brands$: Observable<BrandModel[]> =
    this._carsService.getAllCarBrands();
  readonly securityFeatures$: Observable<SecurityFeatureModel[]> =
    this._carsService.getAllSecurityFeatures();
  readonly comfortFeatures$: Observable<ComfortFeatureModel[]> =
    this._carsService.getAllComfortFeatures();

  /*  Odfiltrowany formularz, ponieważ w modelu Cars są ID a nie nazwy: */

  readonly filteredBrands$: Observable<BrandModel[]> = combineLatest([
    this.searchFormValues$,
    this._carsService.getAllCarBrands(),
  ]).pipe(
    map(([searchForm, carBrands]) =>
      carBrands.filter(
        (brand) =>
          brand.name
            .toLowerCase()
            .includes(
              searchForm.brand ? searchForm.brand.toLowerCase() : ''
            ) /*  toLowerCase - operator dzięki któremu można pisać z dużych i małych liter */
      )
    )
  );

  readonly filteredSecurityFeatures$: Observable<SecurityFeatureModel[]> =
    combineLatest([
      this.searchFormValues$,
      this._carsService.getAllSecurityFeatures(),
    ]).pipe(
      map(([searchForm, sfs]) =>
        sfs.filter((sf) =>
          sf.name
            .toLowerCase()
            .includes(
              searchForm.SecurityFeature
                ? searchForm.SecurityFeature.toLowerCase()
                : ''
            )
        )
      )
    );

  readonly filteredcomfortFeatures$: Observable<ComfortFeatureModel[]> =
    combineLatest([
      this.searchFormValues$,
      this._carsService.getAllComfortFeatures(),
    ]).pipe(
      map(([searchForm, comfortFeatures]) =>
        comfortFeatures.filter((comfortFeature) =>
          comfortFeature.name
            .toLowerCase()
            .includes(
              searchForm.comfortFeature
                ? searchForm.comfortFeature.toLowerCase()
                : ''
            )
        )
      )
    );

  readonly cars$: Observable<
    {
      brand: string;
      model: string;
      comfortFeatures: string[];
      securityFeatures: string[];
    }[]
  > = combineLatest([
    this._carsService.getAllCar(),
    this
      .brands$ /* te trzy zmienne brands, security i comfort są potrzebne tylko w przypadku kiedy musimy pobrać nazwy a mamy tylko ID, gdyby nie było tego w zadaniu wystarczyło by GetAllCar i searchFormValues */,
    this.securityFeatures$,
    this.comfortFeatures$,
    this.searchFormValues$,
  ]).pipe(
    map(([cars, brands, securityFeatures, comfortFeatures, searchForm]) => {
      /* jeżeli gdzieś jest użyte filter - map - w 95% można użyć reduce */
      const brandMap = brands.reduce((a, c) => {
        return { ...a, [c.id]: c };
      }, {}) as Record<string, BrandModel>;
      const securityMap = securityFeatures.reduce((a, c) => {
        return { ...a, [c.id]: c };
      }, {}) as Record<string, SecurityFeatureModel>;
      const comfortMap = comfortFeatures.reduce((a, c) => {
        return { ...a, [c.id]: c };
      }, {}) as Record<string, ComfortFeatureModel>;

      return cars
        .filter(
          (car) =>
            /* trim - nie bierze pod uwagę pustych znaków np spacji */
            (!searchForm.brand ||
              searchForm.brand?.trim().length === 0 ||
              brandMap[car.brandId]?.name === searchForm.brand) &&
            (!searchForm.securityFeature ||
              searchForm.securityFeature?.trim().length === 0 ||
              car.securityFeaturesIds
                .map((sf) => securityMap[sf]?.name)
                .includes(searchForm.securityFeature)) &&
            (!searchForm.comfortFeature ||
              searchForm.comfortFeature?.trim().length === 0 ||
              car.comfortFeaturesIds
                .map((cf) => securityMap[cf]?.name)
                .includes(searchForm.comfortFeature))
        )
        .map((car) => {
          return {
            brand: brandMap[car.brandId]?.name,
            model: car.model,
            comfortFeatures: (car.comfortFeaturesIds ?? []).map(
              (cf) => comfortMap[cf]?.name
            ),
            securityFeatures: (car.securityFeaturesIds ?? []).map(
              (sf) => comfortMap[sf]?.name
            ),
          };
        });
    })
  );

  constructor(private _carsService: CarsService) {}
}
