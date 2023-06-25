import {
    restaurantListItemsTypes,
    foodItemsTypes,
    updatedFoodItemsTypes,
} from "../types";

export class FoodItemsModel {
    name: string;
    cost: number;
    foodType: string;
    imageUrl: string;
    id: string;
    quantity: number;
    constructor(data: foodItemsTypes) {
        this.name = data.name;
        this.cost = data.cost;
        this.foodType = data.food_type;
        this.imageUrl = data.image_url;
        this.id = data.id;
        this.quantity = 0;
    }

    increaseItemQuantity = () => {
        this.quantity += 1;
    };

    decreaseItemQuantity = () => {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    };
}
