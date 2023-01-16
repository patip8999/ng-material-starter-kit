import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RoutePaginationFrondendUniversityComponent } from './route-pagination-frondend-university.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterLink],
  declarations: [RoutePaginationFrondendUniversityComponent],
  providers: [],
  exports: [RoutePaginationFrondendUniversityComponent]
})
export class RoutePaginationFrondendUniversityComponentModule {
}
