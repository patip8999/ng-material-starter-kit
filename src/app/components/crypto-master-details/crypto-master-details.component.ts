import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CryptoModel } from '../../models/crypto.model';
import { CryptosService } from '../../services/cryptos.service';

@Component({
  selector: 'app-crypto-master-details',
  styleUrls: ['./crypto-master-details.component.scss'],
  templateUrl: './crypto-master-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoMasterDetailsComponent {
  readonly list$: Observable<CryptoModel[]> = this._cryptosService.getAll();
  private _selectedCryptoSubject: Subject<CryptoModel> = new Subject<CryptoModel>();
  public selectedCrypto$: Observable<CryptoModel> = this._selectedCryptoSubject.asObservable();

  constructor(private _cryptosService: CryptosService) {
  }

  select(crypto: CryptoModel): void {
    this._selectedCryptoSubject.next(crypto)
  }
}
