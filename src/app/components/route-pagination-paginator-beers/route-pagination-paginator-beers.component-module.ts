import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { RoutePaginationPaginatorBeersComponent } from './route-pagination-paginator-beers.component';
import { MatList, MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [MatCardModule, MatPaginatorModule, MatChipsModule, CommonModule, MatListModule, RouterModule],
  declarations: [RoutePaginationPaginatorBeersComponent],
  providers: [],
  exports: [RoutePaginationPaginatorBeersComponent]
})
export class RoutePaginationPaginatorBeersComponentModule {
}
