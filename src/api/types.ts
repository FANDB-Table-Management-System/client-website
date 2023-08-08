interface BaseEntity {
  _id: string;
  foodName: string;
  foodPrice: string;
  food_id: string;
  foodCategories: string;
  type: string;
}

export interface Dish extends BaseEntity {
  filenames: string;
  food_category_id: string;
  __v: number;
}
