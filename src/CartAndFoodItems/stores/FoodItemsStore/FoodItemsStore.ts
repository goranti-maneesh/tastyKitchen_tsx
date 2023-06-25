import { makeAutoObservable } from "mobx";

import { constraints } from "../../../Common/constraints";
import { FoodItemsServiceTypes } from "../../services/FoodItemsService";

import {
    updatedFoodItemsTypes,
    fetchedRestaurantListItemsTypes,
    restaurantPosterTypes,
    fetchUpdatedRestaurantListItemsTypes,
} from "../types";

import { FoodItemsModel } from "../FoodItemsModels/FoodItemModel";

export class FoodItemStore {
    constraint = constraints.initial as string;
    response = [] as Array<updatedFoodItemsTypes>;
    responseStatus = true as boolean;
    cartItems = [] as Array<updatedFoodItemsTypes>;
    serviceApiInstance: FoodItemsServiceTypes;
    restaurantPoster = {} as restaurantPosterTypes;

    constructor(serviceApiInstance: FoodItemsServiceTypes) {
        makeAutoObservable(this);
        this.serviceApiInstance = serviceApiInstance;
    }

    getCartListFromLocalStorage = () => {
        console.log(123);
    };

    updateCartListFromLocalStorage = () => {};

    updateResponseData = (response: fetchedRestaurantListItemsTypes) => {
        this.responseStatus = response.responseStatus;
        if (response.responseStatus) {
            this.constraint = constraints.success;
            console.log(response.restaurantsList, "response.restaurantsList");
            const foodItemsResponse = response.restaurantsList.food_items.map(
                (eachItem) => new FoodItemsModel(eachItem)
            );
            this.response = foodItemsResponse;
            this.cartItems = foodItemsResponse.filter(
                (eachItem) => eachItem.quantity > 0
            );
        } else {
            this.constraint = constraints.failure;
        }
    };

    fetchFoodItems = async (id: string) => {
        this.constraint = constraints.loading;

        const response = await this.serviceApiInstance.getFoodItems(id);

        this.updateResponseData(response);
    };
}
