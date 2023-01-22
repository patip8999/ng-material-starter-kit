export interface ProductsWithCategoriesQueryModel {
  readonly id: number;
  readonly title: string;
  readonly price: number;
  readonly others: {
    title: string
  }[];
}