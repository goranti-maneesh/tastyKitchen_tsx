import { fetchedRestaurantListItemsTypes } from "../../stores/types";

export interface FoodItemsServiceTypes {
    getFoodItems: (id: string) => Promise<fetchedRestaurantListItemsTypes>
}