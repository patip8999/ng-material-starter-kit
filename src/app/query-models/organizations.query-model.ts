export interface OrganizationsQueryModel {
 
    readonly name: string;
    readonly teams: {
        name:string;
        members: {
            avatarUrl: string
        }[];
    }[];
}[]

