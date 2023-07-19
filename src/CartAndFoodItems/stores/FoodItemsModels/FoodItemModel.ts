import { action, makeAutoObservable } from "mobx";

import { foodItemsModelTypes, foodItemsTypes } from "../types";

export class FoodItemsModel implements foodItemsModelTypes {
    name: string;
    cost: number;
    foodType: string;
    imageUrl: string;
    id: string;
    rating: number;
    quantity = 0 as number;
    constructor(data: foodItemsTypes) {
        makeAutoObservable(this);
        this.name = data.name;
        this.cost = data.cost;
        this.foodType = data.food_type;
        this.imageUrl = data.image_url;
        this.id = data.id;
        this.rating = data.rating;
    }

    // @action.bound
    // increaseItemQuantity = (): void => {
    //     this.quantity += 1;
    // };

    // @action.bound
    // decreaseItemQuantity = (): void => {
    //     if (this.quantity > 0) {
    //         this.quantity -= 1;
    //     }
    // };
}
