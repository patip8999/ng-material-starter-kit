import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { UserModel } from '../../models/user.model';
import { RoleModel } from '../../models/role.model';
import { DepartmentsModel } from '../../models/departments.model';
import { UsersService } from '../../services/users.service';
import { UsersWithRolesAndDepartmentsQueryModel } from 'src/app/query-models/users-with-roles-and-departments.query-model';

@Component({
  selector: 'app-query-string-multi-user',
  templateUrl: './query-string-multi-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryStringMultiUserComponent {
  readonly listUsers$: Observable<UserModel[]> = this._usersService.getAllUsers();
  readonly listRoles$: Observable<RoleModel[]> = this._usersService.getAllRole();
  readonly listDepartments$: Observable<DepartmentsModel[]> = this._usersService.getAllDepartment();
  readonly userMultiList$: Observable<UsersWithRolesAndDepartmentsQueryModel[]> = combineLatest([
    this.listUsers$,
    this.listRoles$,
    this.listDepartments$
  ]).pipe(
    map(([users, roles, departments]) =>
    {
      return users.map((user) => 
    
    {const roleMap = roles.reduce((a,c) => {
      return{...a,[c.id]: c} }, {}) as Record<string, RoleModel>;
      const DpMap = departments.reduce((a,c) => {
        return{...a,[c.id]: c} }, {}) as Record<string, DepartmentsModel>;

        return {
          email: user.email,
          role: roleMap[user.roleId] ? roleMap[user.roleId].role: '',
          department: DpMap[user.departmentId] ? DpMap[user.departmentId].name: ''

        }
    });

    })
  );
  
 

  constructor(private _usersService: UsersService) {
  }
}
