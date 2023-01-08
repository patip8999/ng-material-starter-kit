export interface CarModel {
  readonly model: string;
  readonly description: string;
  readonly brandId: string;
  readonly comfortFeaturesIds: string[];
  readonly securityFeaturesIds: string[];
  readonly id: string;
}
