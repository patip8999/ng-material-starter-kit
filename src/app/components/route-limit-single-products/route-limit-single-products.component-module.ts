import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouteLimitSingleProductsComponent } from './route-limit-single-products.component';
import { RouterLink } from '@angular/router';
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  imports: [
    ReactiveFormsModule,
    MatButtonToggleModule,
    CommonModule,
    MatCardModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    FormsModule,
    MatMenuModule,
    MatIconModule,

  ],
  declarations: [RouteLimitSingleProductsComponent],
  providers: [],
  exports: [RouteLimitSingleProductsComponent],
})
export class RouteLimitSingleProductsComponentModule {}
