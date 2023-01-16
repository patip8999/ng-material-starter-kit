import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { RouteSortSingleProductsBackendComponent } from './route-sort-single-products-backend.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterLink, MatChipsModule],
  declarations: [RouteSortSingleProductsBackendComponent],
  providers: [],
  exports: [RouteSortSingleProductsBackendComponent]
})
export class RouteSortSingleProductsBackendComponentModule {
}
