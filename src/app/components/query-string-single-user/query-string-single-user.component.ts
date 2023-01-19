import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { RoleModel } from 'src/app/models/role.model';
import { UserWithRoleQueryModel } from 'src/app/query-models/user-with-role.query-model';
import { UserModel } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-query-string-single-user',
  templateUrl: './query-string-single-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryStringSingleUserComponent {
  readonly listUsers$: Observable<UserModel[]> = this._usersService.getAllUsers();
  readonly listRoles$: Observable<RoleModel[]> = this._usersService.getAllRole();


  readonly usersQueryModel$: Observable<  UserWithRoleQueryModel[]> = combineLatest([
    this.listUsers$,
    this.listRoles$
  ]).pipe(
    map(([users, roles]) => {
        return users.map((user) => 
        { 
        const roleMap = roles.reduce((a,c) => {
          return {...a,[c.id]: c}
        } ,{}) as Record<string, RoleModel>;

        return {
          email: user.email,
          role: roleMap[user.roleId] ? roleMap[user.roleId].role : ''
        };
      });
    })
  );

  constructor(private _usersService: UsersService) {
  }

 
}
