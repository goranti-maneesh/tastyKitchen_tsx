import { makeAutoObservable, action } from "mobx";

import { constraints } from "../../../Common/constraints";
import { FoodItemsServiceTypes } from "../../services/FoodItemsService";

import {
    foodItemsModelTypes,
    fetchedRestaurantListItemsTypes,
    restaurantPosterTypes,
    restaurantListItemsTypes,
} from "../types";

import { FoodItemsModel } from "../FoodItemsModels/FoodItemModel";

export class FoodItemStore {
    constraint = constraints.initial as string;
    response = [] as Array<foodItemsModelTypes>;
    responseStatus = true as boolean;
    cartItems = [] as Array<foodItemsModelTypes>;
    serviceApiInstance: FoodItemsServiceTypes;
    restaurantPoster = {} as restaurantPosterTypes;

    constructor(serviceApiInstance: FoodItemsServiceTypes) {
        makeAutoObservable(this);
        this.serviceApiInstance = serviceApiInstance;
    }

    @action.bound
    increaseFoodQuantity = (increaseItemQuantity: () => void) => {
        const itemQuantity = increaseItemQuantity();
        console.log(itemQuantity, "itemQuantity");
    };

    @action.bound
    decreaseFoodQuantity = () => {};

    @action.bound
    getCartListFromLocalStorage = () => {
        const localStorageData = localStorage.getItem("cartList");
        if (localStorageData !== null) {
            const parsedCartList: Array<foodItemsModelTypes> =
                JSON.parse(localStorageData);
            const updatedCartList = this.response.map((eachItem) => {
                const filteredLSCartItem = parsedCartList.find(
                    (eachCartItem) => eachCartItem.id === eachItem.id
                );
                if (filteredLSCartItem !== undefined) {
                    return filteredLSCartItem;
                }
                return eachItem;
            });
            this.response = updatedCartList;
        } else {
            this.response = [];
        }
    };

    @action.bound
    updateCartListFromLocalStorage = () => {
        localStorage.setItem("cartList", JSON.stringify(this.cartItems));
    };

    @action.bound
    restaurantPosterDetails = (restaurantList: restaurantListItemsTypes) => ({
        rating: restaurantList.rating,
        id: restaurantList.id,
        name: restaurantList.name,
        costForTwo: restaurantList.cost_for_two,
        cuisine: restaurantList.cuisine,
        imageUrl: restaurantList.image_url,
        reviewsCount: restaurantList.reviews_count,
        opensAt: restaurantList.opens_at,
        location: restaurantList.location,
        itemsCount: restaurantList.items_count,
    });

    @action.bound
    updateResponseData = (response: fetchedRestaurantListItemsTypes) => {
        this.responseStatus = response.responseStatus;
        if (response.responseStatus) {
            this.constraint = constraints.success;
            const foodItemsResponse = response.restaurantsList.food_items.map(
                (eachItem) => new FoodItemsModel(eachItem)
            );
            console.log(foodItemsResponse, "foodItemsResponse");
            this.restaurantPoster = this.restaurantPosterDetails(
                response.restaurantsList
            );
            this.response = foodItemsResponse;
            this.cartItems = foodItemsResponse.filter(
                (eachItem) => eachItem.quantity > 0
            );
        } else {
            this.constraint = constraints.failure;
        }
    };

    @action.bound
    fetchFoodItems = async (id: string) => {
        this.constraint = constraints.loading;

        const response = await this.serviceApiInstance.getFoodItems(id);

        this.updateResponseData(response);
    };
}
