import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RouteFilterSingleProductsBackendComponent } from './route-filter-single-products-backend.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterLink],
  declarations: [RouteFilterSingleProductsBackendComponent],
  providers: [],
  exports: [RouteFilterSingleProductsBackendComponent]
})
export class RouteFilterSingleProductsBackendComponentModule {
}
