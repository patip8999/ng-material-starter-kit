import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DetailsAndDeleteProductListComponent } from './details-and-delete-product-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule, MatIconModule, MatGridListModule, MatProgressSpinnerModule],
  declarations: [DetailsAndDeleteProductListComponent],
  providers: [],
  exports: [DetailsAndDeleteProductListComponent]
})
export class DetailsAndDeleteProductListComponentModule {
}
