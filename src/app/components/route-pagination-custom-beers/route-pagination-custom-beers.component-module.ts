import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RoutePaginationCustomBeersComponent } from './route-pagination-custom-beers.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [ReactiveFormsModule, MatButtonToggleModule, CommonModule, MatCardModule, MatFormFieldModule, MatRadioModule, MatInputModule, MatButtonModule, MatListModule],
  declarations: [RoutePaginationCustomBeersComponent],
  providers: [],
  exports: [RoutePaginationCustomBeersComponent]
})
export class RoutePaginationCustomBeersComponentModule {
}
