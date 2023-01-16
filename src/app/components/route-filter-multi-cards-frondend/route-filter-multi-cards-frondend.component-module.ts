import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { RouteFilterMultiCardsFrondendComponent } from './route-filter-multi-cards-frondend.component';

@NgModule({
  imports: [MatCardModule, MatListModule,CommonModule,MatTableModule],
  declarations: [RouteFilterMultiCardsFrondendComponent],
  providers: [],
  exports: [RouteFilterMultiCardsFrondendComponent]
})
export class RouteFilterMultiCardsFrondendComponentModule {
}
