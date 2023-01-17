import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { SearchUniversityByCountryComponent } from './search-university-by-country.component';

@NgModule({
  imports: [ MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatListModule,
    CommonModule],
  declarations: [SearchUniversityByCountryComponent],
  providers: [],
  exports: [SearchUniversityByCountryComponent]
})
export class SearchUniversityByCountryComponentModule {
}
