import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { SortAndFilterEmployeeComponent } from './sort-and-filter-employee.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule, MatIconModule, MatSelectModule, MatGridListModule],
  declarations: [SortAndFilterEmployeeComponent],
  providers: [],
  exports: [SortAndFilterEmployeeComponent]
})
export class SortAndFilterEmployeeComponentModule {
}
