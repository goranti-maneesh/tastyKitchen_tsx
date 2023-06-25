import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import { fetchedRestaurantListItemsTypes } from "../../stores/types";
import foodItemsFixturesData from "../../fixtures/getRestaurantItems.json"

import { FoodItemsServiceTypes } from './index';

export class FoodItemsService implements FoodItemsServiceTypes{
    getFoodItems = (id: string): Promise<fetchedRestaurantListItemsTypes> => {
        return resolveWithTimeout(foodItemsFixturesData)
    }
}