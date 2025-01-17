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
import { DetailsAndDeleteProductListComponent } from './components/details-and-delete-product-list/details-and-delete-product-list.component';
import { EmptyStateAndSpinnerPublicHolidaysComponent } from './components/empty-state-and-spinner-public-holidays/empty-state-and-spinner-public-holidays.component';
import { AutocompleteCryptoComponent } from './components/autocomplete-crypto/autocomplete-crypto.component';
import { SearchProductEmptyStateComponent } from './components/search-product-empty-state/search-product-empty-state.component';
import { SearchUniversityByCountryComponent } from './components/search-university-by-country/search-university-by-country.component';
import { QueryArraySingleJobComponent } from './components/query-array-single-job/query-array-single-job.component';
import { QueryStringSingleUserComponent } from './components/query-string-single-user/query-string-single-user.component';
import { QueryStringMultiUserComponent } from './components/query-string-multi-user/query-string-multi-user.component';
import { QueryNestedSequentialListProductsWithCategoriesComponent } from './components/query-nested-sequential-list-products-with-categories/query-nested-sequential-list-products-with-categories.component';
import { QueryMultiNestedAccordionOrganizationsComponent } from './components/query-multi-nested-accordion-organizations/query-multi-nested-accordion-organizations.component';
import { QuerySingleNestedAccordionProductsWithStockComponent } from './components/query-single-nested-accordion-products-with-stock/query-single-nested-accordion-products-with-stock.component';
import { QueryLoaderNamesComponent } from './components/query-loader-names/query-loader-names.component';
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
import { DetailsAndDeleteProductListComponentModule } from './components/details-and-delete-product-list/details-and-delete-product-list.component-module';
import { EmptyStateAndSpinnerPublicHolidaysComponentModule } from './components/empty-state-and-spinner-public-holidays/empty-state-and-spinner-public-holidays.component-module';
import { AutocompleteCryptoComponentModule } from './components/autocomplete-crypto/autocomplete-crypto.component-module';
import { SearchProductEmptyStateComponentModule } from './components/search-product-empty-state/search-product-empty-state.component-module';
import { SearchUniversityByCountryComponentModule } from './components/search-university-by-country/search-university-by-country.component-module';
import { QueryArraySingleJobComponentModule } from './components/query-array-single-job/query-array-single-job.component-module';
import { QueryStringSingleUserComponentModule } from './components/query-string-single-user/query-string-single-user.component-module';
import { QueryStringMultiUserComponentModule } from './components/query-string-multi-user/query-string-multi-user.component-module';
import { QueryNestedSequentialListProductsWithCategoriesComponentModule } from './components/query-nested-sequential-list-products-with-categories/query-nested-sequential-list-products-with-categories.component-module';
import { QueryMultiNestedAccordionOrganizationsComponentModule } from './components/query-multi-nested-accordion-organizations/query-multi-nested-accordion-organizations.component-module';
import { QuerySingleNestedAccordionProductsWithStockComponentModule } from './components/query-single-nested-accordion-products-with-stock/query-single-nested-accordion-products-with-stock.component-module';
import { QueryLoaderNamesComponentModule } from './components/query-loader-names/query-loader-names.component-module';

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
      { path: 'sort-and-filter-employee', component: SortAndFilterEmployeeComponent },
      { path: 'details-and-delete-product-list', component: DetailsAndDeleteProductListComponent },
      { path: 'empty-state-and-spinner-public-holidays', component: EmptyStateAndSpinnerPublicHolidaysComponent },
      { path: 'autocomplete-crypto', component: AutocompleteCryptoComponent },
      { path: 'search-product-empty-state', component: SearchProductEmptyStateComponent },
      { path: 'search-university-by-country', component: SearchUniversityByCountryComponent },
      { path: 'query-array-single-job', component: QueryArraySingleJobComponent },
      { path: 'query-string-single-user', component: QueryStringSingleUserComponent },
      { path: 'query-string-multi-user', component: QueryStringMultiUserComponent },
      { path: 'query-nested-sequential-list-products-with-category', component: QueryNestedSequentialListProductsWithCategoriesComponent },
      { path: 'query-multi-nested-accordion-organizations', component: QueryMultiNestedAccordionOrganizationsComponent },
      { path: 'query-single-nested-accordion-products-with-stock', component: QuerySingleNestedAccordionProductsWithStockComponent },
      { path: 'query-loader-names', component: QueryLoaderNamesComponent }
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
    SortAndFilterEmployeeComponentModule,
    DetailsAndDeleteProductListComponentModule,
    EmptyStateAndSpinnerPublicHolidaysComponentModule,
    AutocompleteCryptoComponentModule,
    SearchProductEmptyStateComponentModule,
    SearchUniversityByCountryComponentModule,
    QueryArraySingleJobComponentModule,
    QueryStringSingleUserComponentModule,
    QueryStringMultiUserComponentModule,
    QueryNestedSequentialListProductsWithCategoriesComponentModule,
    QueryMultiNestedAccordionOrganizationsComponentModule,
    QuerySingleNestedAccordionProductsWithStockComponentModule,
    QueryLoaderNamesComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
