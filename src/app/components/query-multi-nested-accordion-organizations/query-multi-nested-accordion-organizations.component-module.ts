import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { QueryMultiNestedAccordionOrganizationsComponent } from './query-multi-nested-accordion-organizations.component';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatExpansionModule, CommonModule, MatListModule],
  declarations: [QueryMultiNestedAccordionOrganizationsComponent],
  providers: [],
  exports: [QueryMultiNestedAccordionOrganizationsComponent]
})
export class QueryMultiNestedAccordionOrganizationsComponentModule {
}
