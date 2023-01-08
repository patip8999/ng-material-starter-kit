import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormAutocompleteMultiCarsComponent } from './components/form-autocomplete-multi-cars/form-autocomplete-multi-cars.component';
import { FormAutocompleteMultiCarsComponentModule } from './components/form-autocomplete-multi-cars/form-autocomplete-multi-cars.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'form-autocomplete-multi-cars', component: FormAutocompleteMultiCarsComponent }]), FormAutocompleteMultiCarsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
