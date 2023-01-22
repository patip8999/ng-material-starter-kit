import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { combineLatest, map, Observable, switchMap } from 'rxjs';
import { TeamModel } from 'src/app/models/team.model';
import { UserWithAvatarModel } from 'src/app/models/user-with-avatar.model';
import { OrganizationsQueryModel } from 'src/app/query-models/organizations.query-model';
import { TeamsQueryModel } from 'src/app/query-models/teams.query-model';
import { OrganizationModel } from '../../models/organization.model';
import { OrganizationsService } from '../../services/organizations.service';

@Component({
  selector: 'app-query-multi-nested-accordion-organizations',
  templateUrl: './query-multi-nested-accordion-organizations.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryMultiNestedAccordionOrganizationsComponent {
  readonly organizations$: Observable<OrganizationsQueryModel[]> = combineLatest([
   this._organizationsService.getAllOrganizations(),
   this._organizationsService.getAllUsers()
  ]).pipe(
    switchMap(([organizations, users]) => this._organizationsService.getAllTeams(organizations.map((organizations) => organizations.id)).pipe(
      map((teamMap) => organizations.map((organizations) => ({
        name: organizations.name,
        teams: this._mapTeam(teamMap[organizations.id], users)
      })))
    )))
  
  constructor(private _organizationsService: OrganizationsService) {
  }

  private _mapTeam(teams: TeamModel[], users: UserWithAvatarModel[]): TeamsQueryModel[] {
    const userMap = users.reduce((a,c) => ({...a,[c.id]:c}),
    
    {} as Record<string, UserWithAvatarModel>
    )

    return teams.map((t) => ({
      name: t.name,
      members: t.userIds.map((userId: string) => ({
        avatarUrl: userMap[userId]?.avatar
      }))
    }))
  } 
}


