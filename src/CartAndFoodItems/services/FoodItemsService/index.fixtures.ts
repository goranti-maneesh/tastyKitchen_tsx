import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import { FetchedRestaurantListItemsTypes } from "../../stores/types";
import foodItemsFixturesData from "../../fixtures/getRestaurantItems.json";

import { FoodItemsServiceTypes } from "./index";

export class FoodItemsService implements FoodItemsServiceTypes {
    getFoodItems = (id: string): Promise<FetchedRestaurantListItemsTypes> => {
        return resolveWithTimeout(foodItemsFixturesData);
    };
}
