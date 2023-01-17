import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CryptoMasterDetailsComponent } from './crypto-master-details.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { MatListModule } from '@angular/material/list';
@NgModule({
  imports: [MatCardModule, MatGridListModule, CommonModule, MatButtonModule, MatIconModule, MatProgressSpinnerModule, MatListModule ],
  declarations: [CryptoMasterDetailsComponent],
  providers: [],
  exports: [CryptoMasterDetailsComponent]
})
export class CryptoMasterDetailsComponentModule {
}
