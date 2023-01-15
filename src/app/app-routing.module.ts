import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormAutocompleteMultiCarsComponent } from './components/form-autocomplete-multi-cars/form-autocomplete-multi-cars.component';
import { CatsSearchAutocompleteComponent } from './components/cats-search-autocomplete/cats-search-autocomplete.component';
import { RouteLimitSingleProductsComponent } from './components/route-limit-single-products/route-limit-single-products.component';
import { RoutePaginationSimpleBeersComponent } from './components/route-pagination-simple-beers/route-pagination-simple-beers.component';
import { RoutePaginationPaginatorBeersComponent } from './components/route-pagination-paginator-beers/route-pagination-paginator-beers.component';
import { FormAutocompleteMultiCarsComponentModule } from './components/form-autocomplete-multi-cars/form-autocomplete-multi-cars.component-module';
import { CatsSearchAutocompleteComponentModule } from './components/cats-search-autocomplete/cats-search-autocomplete.component-module';
import { RouteLimitSingleProductsComponentModule } from './components/route-limit-single-products/route-limit-single-products.component-module';
import { RoutePaginationSimpleBeersComponentModule } from './components/route-pagination-simple-beers/route-pagination-simple-beers.component-module';
import { RoutePaginationPaginatorBeersComponentModule } from './components/route-pagination-paginator-beers/route-pagination-paginator-beers.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'form-autocomplete-multi-cars', component: FormAutocompleteMultiCarsComponent },
      { path: 'cats-search-autocomplete', component: CatsSearchAutocompleteComponent },
      { path: 'route-limit-single-products', component: RouteLimitSingleProductsComponent },
      { path: 'route-pagination-simple-beers', component: RoutePaginationSimpleBeersComponent },
      { path: 'route-pagination-paginator-beers', component: RoutePaginationPaginatorBeersComponent }
    ]),
    FormAutocompleteMultiCarsComponentModule,
    CatsSearchAutocompleteComponentModule,
    RouteLimitSingleProductsComponentModule,
    RoutePaginationSimpleBeersComponentModule,
    RoutePaginationPaginatorBeersComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
