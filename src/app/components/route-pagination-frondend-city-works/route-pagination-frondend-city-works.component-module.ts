import { NgModule } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { RoutePaginationFrondendCityWorksComponent } from './route-pagination-frondend-city-works.component';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule],
  declarations: [RoutePaginationFrondendCityWorksComponent],
  providers: [],
  exports: [RoutePaginationFrondendCityWorksComponent],
})
export class RoutePaginationFrondendCityWorksComponentModule {}
