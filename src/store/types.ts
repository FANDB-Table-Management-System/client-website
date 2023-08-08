export interface UserState {
    username: string;
    phoneNumber: string;
    otp: string;
}


interface BaseEntity {
    _id: string;
    foodName: string;
    foodPrice: string;
    food_id: string;
    foodCategories: string;
    type: string;
  }
  
export interface CartDishItem extends BaseEntity {
    quantity_bought: number;
}
  
export interface FoodQty {
    [key: string]: number; 
}
