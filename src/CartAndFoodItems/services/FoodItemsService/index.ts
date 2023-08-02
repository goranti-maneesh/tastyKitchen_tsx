import { FetchedRestaurantListItemsTypes } from "../../stores/types";

export interface FoodItemsServiceTypes {
    getFoodItems: (id: string) => Promise<FetchedRestaurantListItemsTypes>;
}
