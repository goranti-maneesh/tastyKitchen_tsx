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

export class FoodItemStore {
    constraint = constraints.initial as string;
    response = [] as Array<foodItemsModelTypes>;
    responseStatus = true as boolean;
    cartList = [] as Array<foodItemsModelTypes>;
    serviceApiInstance: FoodItemsServiceTypes;
    restaurantPoster = {} as restaurantPosterTypes;
    totalPrice = 0 as number;

    constructor(serviceApiInstance: FoodItemsServiceTypes) {
        makeAutoObservable(this);
        this.serviceApiInstance = serviceApiInstance;
    }

    calculateTotalPrice = () => {
        this.totalPrice = this.cartList.reduce(
            (total, item) => total + item.price,
            0
        );
    };

    updateLocalStorage = () => {
        localStorage.setItem("cartList", JSON.stringify(this.cartList));
    };

    getCartItemIndex = (id: string) => {
        return this.cartList.findIndex((item) => item.id === id);
    };

    updateCartItemQuantity = (id: string, increment: boolean) => {
        const index = this.getCartItemIndex(id);
        console.log(index, "index");
        if (index !== -1) {
            const item = this.cartList[index];
            item.quantity += increment ? 1 : -1;
            item.price = item.quantity * item.cost;
            if (item.quantity <= 0) {
                this.cartList.splice(index, 1);
            }
            this.calculateTotalPrice();
            this.updateLocalStorage();
        }
    };

    getUpdatedResponseData = (cartList: foodItemsModelTypes[]) => {
        return this.response.map((eachItem) => {
            const cartItem = cartList.find((item) => item.id === eachItem.id);
            return cartItem || eachItem;
        });
    };

    addItemToCart = (item: foodItemsModelTypes) => {
        const newItem = { ...item, quantity: 1, price: item.cost };
        this.cartList.push(newItem);
        this.calculateTotalPrice();
        this.updateLocalStorage();
        this.response = this.getUpdatedResponseData(this.cartList);
    };

    incrementItemQuantity = (id: string) => {
        console.log(id);
        this.updateCartItemQuantity(id, true);
        this.response = this.getUpdatedResponseData(this.cartList);
    };

    decrementItemQuantity = (id: string) => {
        this.updateCartItemQuantity(id, false);
        this.response = this.getUpdatedResponseData(this.cartList);
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

    getCartListFromLS = () => {
        const cartListFromLS: string | null = localStorage.getItem("cartList");

        let parsedCartList: Array<foodItemsModelTypes> = [];

        if (cartListFromLS !== null) {
            parsedCartList = JSON.parse(cartListFromLS);
        }

        this.cartList = parsedCartList;

        return parsedCartList;
    };

    @action.bound
    updateResponseData = (response: fetchedRestaurantListItemsTypes) => {
        this.responseStatus = response.responseStatus;
        if (response.responseStatus) {
            this.constraint = constraints.success;

            const foodItemsResponse = response.restaurantsList.food_items.map(
                (eachItem) => new FoodItemsModel(eachItem)
            );

            const parsedCartList = this.getCartListFromLS();

            if (parsedCartList.length !== 0) {
                let totalCartPrice = 0;
                parsedCartList.forEach((eachItem) => {
                    totalCartPrice += eachItem.quantity * eachItem.cost;
                });

                this.totalPrice = totalCartPrice;
            }

            const updatedFoodItemsResponse = foodItemsResponse.map(
                (eachItem) => {
                    const filteredLSCartItem = parsedCartList.find(
                        (eachCartItem) => eachCartItem.id === eachItem.id
                    );
                    if (filteredLSCartItem !== undefined) {
                        return filteredLSCartItem;
                    }
                    return eachItem;
                }
            );

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
