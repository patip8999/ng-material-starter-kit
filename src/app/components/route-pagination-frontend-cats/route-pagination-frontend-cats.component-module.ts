import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { RoutePaginationFrontendCatsComponent } from './route-pagination-frontend-cats.component';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterLink],
  declarations: [RoutePaginationFrontendCatsComponent],
  providers: [],
  exports: [RoutePaginationFrontendCatsComponent]
})
export class RoutePaginationFrontendCatsComponentModule {
}
