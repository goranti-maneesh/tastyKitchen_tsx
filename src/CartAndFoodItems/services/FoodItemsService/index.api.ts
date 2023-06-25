import { getJwtToken } from "../../../Common/utils/StorageUtils";

import { fetchedRestaurantListItemsTypes } from "../../stores/types";

export class FoodItemsService implements FoodItemsService {
    getFoodItems = async (
        id: string
    ): Promise<fetchedRestaurantListItemsTypes> => {
        const options = {
            method: "GET",
            headers: {
                authorization: `bearer ${getJwtToken()}`,
            },
        };

        const response = await fetch(
            `https://apis.ccbp.in/restaurants-list/${id}`,
            options
        );

        const data = await response.json();

        return {
            responseStatus: response.ok,
            restaurantsList: data,
        };
    };
}
