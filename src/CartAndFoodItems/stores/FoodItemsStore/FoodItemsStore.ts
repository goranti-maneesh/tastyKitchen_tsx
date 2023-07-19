import { useContext } from "react";
import { makeAutoObservable, action } from "mobx";

import {
    foodItemsModelTypes,
    fetchedRestaurantListItemsTypes,
    restaurantPosterTypes,
    restaurantListItemsTypes,
} from "../types";
import { FoodItemsModel } from "../FoodItemsModels/FoodItemModel";

import { FoodItemsServiceTypes } from "../../services/FoodItemsService";

import { constraints } from "../../../Common/constraints";
import { ObjContext } from "../../../Common/context";

let cartListFromContext: Array<foodItemsModelTypes> = [];

// const GetCartListFromContext = () => {
//     const {cartList} =  useContext(ObjContext)
//     cartListFromContext = cartList

// }

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
    getCartListFromLocalStorage = () => {
        const localStorageData = localStorage.getItem("cartList");
        if (localStorageData !== null) {
            const parsedData: Array<foodItemsModelTypes> =
                JSON.parse(localStorageData);
            this.cartItems = parsedData;
            const updatedCartList = this.response.map((eachItem) => {
                const filteredLSCartItem = parsedData.find(
                    (eachCartItem) => eachCartItem.id === eachItem.id
                );
                if (filteredLSCartItem !== undefined) {
                    return filteredLSCartItem;
                }
                return eachItem;
            });
            this.response = updatedCartList;
        } else {
            localStorage.setItem("cartList", JSON.stringify([]));
        }
    };

    @action.bound
    updateCartListInLocalStorage = () => {
        const cartItems = this.response.filter(
            (eachItem) => eachItem.quantity > 0
        );

        const otherCartItems = this.cartItems.filter((eachItem) => {
            const isItemAddedInCart = this.response.find(
                (eachResponseItem) => eachResponseItem.id === eachItem.id
            );
            if (isItemAddedInCart === undefined) {
                return eachItem;
            }
        });

        localStorage.setItem(
            "cartList",
            JSON.stringify([...otherCartItems, ...cartItems])
        );
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

            const updatedFoodItemsResponse = foodItemsResponse.map(
                (eachItem) => {
                    const filteredLSCartItem = cartListFromContext.find(
                        (eachCartItem) => eachCartItem.id === eachItem.id
                    );
                    if (filteredLSCartItem !== undefined) {
                        return filteredLSCartItem;
                    }
                    return eachItem;
                }
            );

            console.log(updatedFoodItemsResponse, "updatedFoodItemsResponse");

            this.restaurantPoster = this.restaurantPosterDetails(
                response.restaurantsList
            );

            this.response = updatedFoodItemsResponse;
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
