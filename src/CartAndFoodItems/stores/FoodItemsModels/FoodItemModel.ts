import { makeAutoObservable } from "mobx";

import { FoodItemsModelTypes, FoodItemsTypes } from "../types";

export class FoodItemsModel implements FoodItemsModelTypes {
    name: string;
    cost: number;
    foodType: string;
    imageUrl: string;
    id: string;
    rating: number;
    quantity: number;
    price: number;
    constructor(data: FoodItemsTypes) {
        makeAutoObservable(this);
        this.name = data.name;
        this.cost = data.cost;
        this.foodType = data.food_type;
        this.imageUrl = data.image_url;
        this.id = data.id;
        this.rating = data.rating;
        this.quantity = 0;
        this.price = 0;
    }
}
