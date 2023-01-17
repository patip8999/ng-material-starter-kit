import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import { AutocompleteCryptoComponent } from './autocomplete-crypto.component';

@NgModule({
  imports: [MatCardModule, MatChipsModule, CommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatAutocompleteModule],
  declarations: [AutocompleteCryptoComponent],
  providers: [],
  exports: [AutocompleteCryptoComponent]
})
export class AutocompleteCryptoComponentModule {
}
