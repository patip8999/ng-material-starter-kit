import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormAutocompleteMultiCarsComponent } from './components/form-autocomplete-multi-cars/form-autocomplete-multi-cars.component';
import { CatsSearchAutocompleteComponent } from './components/cats-search-autocomplete/cats-search-autocomplete.component';
import { RouteLimitSingleProductsComponent } from './components/route-limit-single-products/route-limit-single-products.component';
import { RoutePaginationSimpleBeersComponent } from './components/route-pagination-simple-beers/route-pagination-simple-beers.component';
import { RoutePaginationPaginatorBeersComponent } from './components/route-pagination-paginator-beers/route-pagination-paginator-beers.component';
import { RoutePaginationCustomBeersComponent } from './components/route-pagination-custom-beers/route-pagination-custom-beers.component';
import { RoutePaginationFrontendCountriesComponent } from './components/route-pagination-frontend-countries/route-pagination-frontend-countries.component';
import { RoutePaginationFrontendCatsComponent } from './components/route-pagination-frontend-cats/route-pagination-frontend-cats.component';
import { RoutePaginationFrondendUniversityComponent } from './components/route-pagination-frondend-university/route-pagination-frondend-university.component';
import { RoutePaginationFrondendBeersComponent } from './components/route-pagination-frondend-beers/route-pagination-frondend-beers.component';
import { RouteSortSingleProductsBackendComponent } from './components/route-sort-single-products-backend/route-sort-single-products-backend.component';
import { SearchRouteMultiJobsComponent } from './components/search-route-multi-jobs/search-route-multi-jobs.component';
import { RouteFilterSingleProductsBackendComponent } from './components/route-filter-single-products-backend/route-filter-single-products-backend.component';
import { RouteFilterMultiCardsFrondendComponent } from './components/route-filter-multi-cards-frondend/route-filter-multi-cards-frondend.component';
import { RoutePaginationFrondendCityWorksComponent } from './components/route-pagination-frondend-city-works/route-pagination-frondend-city-works.component';
import { CryptoMasterDetailsComponent } from './components/crypto-master-details/crypto-master-details.component';
import { SortAndFilterEmployeeComponent } from './components/sort-and-filter-employee/sort-and-filter-employee.component';
import { FormAutocompleteMultiCarsComponentModule } from './components/form-autocomplete-multi-cars/form-autocomplete-multi-cars.component-module';
import { CatsSearchAutocompleteComponentModule } from './components/cats-search-autocomplete/cats-search-autocomplete.component-module';
import { RouteLimitSingleProductsComponentModule } from './components/route-limit-single-products/route-limit-single-products.component-module';
import { RoutePaginationSimpleBeersComponentModule } from './components/route-pagination-simple-beers/route-pagination-simple-beers.component-module';
import { RoutePaginationPaginatorBeersComponentModule } from './components/route-pagination-paginator-beers/route-pagination-paginator-beers.component-module';
import { RoutePaginationCustomBeersComponentModule } from './components/route-pagination-custom-beers/route-pagination-custom-beers.component-module';
import { RoutePaginationFrontendCountriesComponentModule } from './components/route-pagination-frontend-countries/route-pagination-frontend-countries.component-module';
import { RoutePaginationFrontendCatsComponentModule } from './components/route-pagination-frontend-cats/route-pagination-frontend-cats.component-module';
import { RoutePaginationFrondendUniversityComponentModule } from './components/route-pagination-frondend-university/route-pagination-frondend-university.component-module';
import { RoutePaginationFrondendBeersComponentModule } from './components/route-pagination-frondend-beers/route-pagination-frondend-beers.component-module';
import { RouteSortSingleProductsBackendComponentModule } from './components/route-sort-single-products-backend/route-sort-single-products-backend.component-module';
import { SearchRouteMultiJobsComponentModule } from './components/search-route-multi-jobs/search-route-multi-jobs.component-module';
import { RouteFilterSingleProductsBackendComponentModule } from './components/route-filter-single-products-backend/route-filter-single-products-backend.component-module';
import { RouteFilterMultiCardsFrondendComponentModule } from './components/route-filter-multi-cards-frondend/route-filter-multi-cards-frondend.component-module';
import { RoutePaginationFrondendCityWorksComponentModule } from './components/route-pagination-frondend-city-works/route-pagination-frondend-city-works.component-module';
import { CryptoMasterDetailsComponentModule } from './components/crypto-master-details/crypto-master-details.component-module';
import { SortAndFilterEmployeeComponentModule } from './components/sort-and-filter-employee/sort-and-filter-employee.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'form-autocomplete-multi-cars', component: FormAutocompleteMultiCarsComponent },
      { path: 'cats-search-autocomplete', component: CatsSearchAutocompleteComponent },
      { path: 'route-limit-single-products', component: RouteLimitSingleProductsComponent },
      { path: 'route-pagination-simple-beers', component: RoutePaginationSimpleBeersComponent },
      { path: 'route-pagination-paginator-beers', component: RoutePaginationPaginatorBeersComponent },
      { path: 'route-pagination-custom-beers', component: RoutePaginationCustomBeersComponent },
      { path: 'router-pagination-frondend-countries', component: RoutePaginationFrontendCountriesComponent },
      { path: 'route-pagination-frontend-cats', component: RoutePaginationFrontendCatsComponent },
      { path: 'route-pagination-frondend-university', component: RoutePaginationFrondendUniversityComponent },
      { path: 'route-pagination-frondend-beers', component: RoutePaginationFrondendBeersComponent },
      { path: 'route-sort-single-products-backend', component: RouteSortSingleProductsBackendComponent },
      { path: 'search-route-multi-jobs', component: SearchRouteMultiJobsComponent },
      { path: 'products/:category', component: RouteFilterSingleProductsBackendComponent },
      { path: 'list-2-route-filter-multi-cars-frondend', component: RouteFilterMultiCardsFrondendComponent },
      { path: 'route-pagination-frondend-city-works', component: RoutePaginationFrondendCityWorksComponent },
      { path: 'crypto-master-details', component: CryptoMasterDetailsComponent },
      { path: 'sort-and-filter-employee', component: SortAndFilterEmployeeComponent }
    ]),
    FormAutocompleteMultiCarsComponentModule,
    CatsSearchAutocompleteComponentModule,
    RouteLimitSingleProductsComponentModule,
    RoutePaginationSimpleBeersComponentModule,
    RoutePaginationPaginatorBeersComponentModule,
    RoutePaginationCustomBeersComponentModule,
    RoutePaginationFrontendCountriesComponentModule,
    RoutePaginationFrontendCatsComponentModule,
    RoutePaginationFrondendUniversityComponentModule,
    RoutePaginationFrondendBeersComponentModule,
    RouteSortSingleProductsBackendComponentModule,
    SearchRouteMultiJobsComponentModule,
    RouteFilterSingleProductsBackendComponentModule,
    RouteFilterMultiCardsFrondendComponentModule,
    RoutePaginationFrondendCityWorksComponentModule,
    CryptoMasterDetailsComponentModule,
    SortAndFilterEmployeeComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
