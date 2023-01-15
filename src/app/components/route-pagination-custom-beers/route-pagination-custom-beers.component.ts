import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-route-pagination-custom-beers',
  styleUrls: ['./route-pagination-custom-beers.component.scss'],
  templateUrl: './route-pagination-custom-beers.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoutePaginationCustomBeersComponent {
}
