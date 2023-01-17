import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../models/employee.model';

interface EmployeeResponse {
  status: string,
  data: EmployeeModel[],
  message: string,
}

interface EmployeeResponse2 {
  status: string,
  data: EmployeeModel,
  message: string,
}


@Injectable({ providedIn: 'root' })
export class EmployeesService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<EmployeeResponse>('https://dummy.restapiexample.com/api/v1/employees').pipe(map(
      (response) => response.data
    ));
  }

  delete(id: string): Observable<EmployeeModel> {
    return this._httpClient.delete<EmployeeModel>('https://dummy.restapiexample.com/api/v1/delete/' + id);
  }

  getOne(id: string): Observable<EmployeeModel> {
    return this._httpClient.get<EmployeeResponse2>(`https://dummy.restapiexample.com/api/v1/employee/${id}`).pipe(map(
        (response) => response.data));
    }
}
