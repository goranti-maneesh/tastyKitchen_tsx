import { getJwtToken } from "../../../Common/utils/StorageUtils";

import { FetchedRestaurantListItemsTypes } from "../../stores/types";

export class FoodItemsService implements FoodItemsService {
    getFoodItems = async (
        id: string
    ): Promise<FetchedRestaurantListItemsTypes> => {
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
