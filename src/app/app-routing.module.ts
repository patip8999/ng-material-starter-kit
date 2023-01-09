import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormAutocompleteMultiCarsComponent } from './components/form-autocomplete-multi-cars/form-autocomplete-multi-cars.component';
import { CatsSearchAutocompleteComponent } from './components/cats-search-autocomplete/cats-search-autocomplete.component';
import { FormAutocompleteMultiCarsComponentModule } from './components/form-autocomplete-multi-cars/form-autocomplete-multi-cars.component-module';
import { CatsSearchAutocompleteComponentModule } from './components/cats-search-autocomplete/cats-search-autocomplete.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'form-autocomplete-multi-cars',
        component: FormAutocompleteMultiCarsComponent,
      },
      {
        path: 'cats-search-autocomplete',
        component: CatsSearchAutocompleteComponent,
      },
    ]),
    FormAutocompleteMultiCarsComponentModule,
    CatsSearchAutocompleteComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
