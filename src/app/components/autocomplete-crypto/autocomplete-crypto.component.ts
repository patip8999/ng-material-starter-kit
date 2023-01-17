import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject, debounceTime, Observable, of, Subject, switchMap } from 'rxjs';
import { CryptoModel } from 'src/app/models/crypto.model';
import { CryptosService } from 'src/app/services/cryptos.service';

@Component({
  selector: 'app-autocomplete-crypto',
  styleUrls: ['./autocomplete-crypto.component.scss'],
  templateUrl: './autocomplete-crypto.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AutocompleteCryptoComponent {
  readonly autocomplete: FormGroup = new FormGroup({
    symbol: new FormControl()
  });
  private symbolArray: string[] = []
  private _startWithSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public startWith$: Observable<string> = this._startWithSubject.asObservable();

  readonly autocompleteCryptos$: Observable<CryptoModel[]> =
    this.startWith$.pipe(
      debounceTime(1000),
      switchMap((data) =>
        this._cryptosService.getAllAutocomplete(data)));

  private _selectedOptionSubject: Subject<string[]> = new Subject<string[]>();
  public SelectedOption$: Observable<string[]> = this._selectedOptionSubject.asObservable();

  readonly symbolChips$: Observable<string[]> =
    this.SelectedOption$.pipe(
      switchMap(data => of(data))
    )

  constructor(private _cryptosService: CryptosService) {
  }

  selectOption(crypto: CryptoModel): void {
    this.symbolArray.push(crypto.symbol)
    this._selectedOptionSubject.next(this.symbolArray)
  }

  onAutocompleteSubmitted(autocomplete: FormGroup): void {
  }
}




