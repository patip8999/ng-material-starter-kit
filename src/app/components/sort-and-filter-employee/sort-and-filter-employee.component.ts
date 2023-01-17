import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of, Subject, switchMap } from 'rxjs';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-sort-and-filter-employee',
  styleUrls: ['./sort-and-filter-employee.component.scss'],
  templateUrl: './sort-and-filter-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortAndFilterEmployeeComponent {
  private _refreshSubject: BehaviorSubject<void> = new BehaviorSubject<void>(void 0);
  public refresh$: Observable<void> = this._refreshSubject.asObservable();
  readonly refreshedList$: Observable<EmployeeModel[]> = this.refresh$.pipe(switchMap(data => this._employeesService.getAll()));
  public order: Observable<string[]> = of(['asc', 'desc'])
  private _ordersSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
  public orders$: Observable<string> = this._ordersSubject.asObservable();
  private _ageSubject: Subject<number> = new Subject<number>();
  public age$: Observable<number> = this._ageSubject.asObservable();
  private _ageSecondSubject: Subject<number> = new Subject<number>();
  public ageSecond$: Observable<number> = this._ageSecondSubject.asObservable();


  readonly employees$: Observable<EmployeeModel[]> = combineLatest([
    this._employeesService.getAll(),
    this.orders$,
    this.age$,
    this.ageSecond$,
  ]).pipe(
    map(([employee, order, age, ageSecond]: [EmployeeModel[], string, number, number]) => {
      if (age === ageSecond) {
        return employee.sort((a, b) => {
          if (a.employee_salary > b.employee_salary) return order === 'asc' ? 1 : -1;
          if (a.employee_salary < b.employee_salary) return order === 'asc' ? -1 : 1;
          return 0;
        })
      }
      return employee.filter(employee => employee.employee_age >= age && employee.employee_age < ageSecond,

        employee.sort((a, b) => {
          if (a.employee_salary > b.employee_salary) return order === 'asc' ? 1 : -1;
          if (a.employee_salary < b.employee_salary) return order === 'asc' ? -1 : 1;
          return 0;
        })
      )

    }),
  )
  private _selectedEmployeeIdSubject: Subject<string> = new Subject<string>();
  public selectedEmployeeId$: Observable<string> = this._selectedEmployeeIdSubject.asObservable();
  readonly details$: Observable<EmployeeModel> = this.selectedEmployeeId$.pipe(switchMap(data => this._employeesService.getOne(data)));

  constructor(private _employeesService: EmployeesService) {
  }

  delete(id: string): void {
    this._employeesService.delete(id).subscribe(() => this._refreshSubject.next());
  }

  sort(order: string): void {
    this._ordersSubject.next(order);
  }

  filter(a: number, b: number) {
    this._ageSubject.next(a)
    this._ageSecondSubject.next(b)

  }

  select(id: string): void {
    this._selectedEmployeeIdSubject.next(id)
  }
}

