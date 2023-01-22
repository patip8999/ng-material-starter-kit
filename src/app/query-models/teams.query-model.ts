export interface TeamsQueryModel {
  readonly name: string;
  readonly members: {
    avatarUrl: string
  }[]
}[]