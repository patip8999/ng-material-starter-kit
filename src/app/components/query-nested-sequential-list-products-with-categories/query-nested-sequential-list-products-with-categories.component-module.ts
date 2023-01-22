import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';
import { QueryNestedSequentialListProductsWithCategoriesComponent } from './query-nested-sequential-list-products-with-categories.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [MatChipsModule, CommonModule, MatListModule, MatCardModule],
  declarations: [QueryNestedSequentialListProductsWithCategoriesComponent],
  providers: [],
  exports: [QueryNestedSequentialListProductsWithCategoriesComponent]
})
export class QueryNestedSequentialListProductsWithCategoriesComponentModule {
}
