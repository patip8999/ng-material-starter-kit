import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { OrganizationModel } from '../models/organization.model';
import { UserWithAvatarModel } from '../models/user-with-avatar.model';
import { TeamModel } from '../models/team.model';

@Injectable({ providedIn: 'root' })
export class OrganizationsService {
  constructor(private _httpClient: HttpClient) {
  }

  getAllOrganizations(): Observable<OrganizationModel[]> {
    return this._httpClient.get<OrganizationModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/organizations');
  }

  getAllUsers(): Observable<UserWithAvatarModel[]> {
    return this._httpClient.get<UserWithAvatarModel[]>('https://636ce2d8ab4814f2b2712854.mockapi.io/users-with-avatars');
  }

  getAllTeams(organizationIds: string[]): Observable<Record<string, TeamModel[]>> {
    return forkJoin(
        organizationIds.map((organizationIds) => 
    this._httpClient.get<TeamModel[]>(`https://636ce2d8ab4814f2b2712854.mockapi.io/organizations/${organizationIds}/teams`))
    ).pipe(
        map((organizationTeams: TeamModel[][]) =>
        organizationTeams.reduce((a,c,idx) => ({...a,[organizationIds[idx]]:c}),
        {} as Record<string, TeamModel[]>)
    ))
  }
}
