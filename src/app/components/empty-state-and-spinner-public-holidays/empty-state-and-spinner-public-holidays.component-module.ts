import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { EmptyStateAndSpinnerPublicHolidaysComponent } from './empty-state-and-spinner-public-holidays.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, MatSelectModule, MatOptionModule, CommonModule, MatProgressSpinnerModule],
  declarations: [EmptyStateAndSpinnerPublicHolidaysComponent],
  providers: [],
  exports: [EmptyStateAndSpinnerPublicHolidaysComponent]
})
export class EmptyStateAndSpinnerPublicHolidaysComponentModule {
}
