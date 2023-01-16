import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RoutePaginationFrondendBeersComponent } from './route-pagination-frondend-beers.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterLink],
  declarations: [RoutePaginationFrondendBeersComponent],
  providers: [],
  exports: [RoutePaginationFrondendBeersComponent]
})
export class RoutePaginationFrondendBeersComponentModule {
}
