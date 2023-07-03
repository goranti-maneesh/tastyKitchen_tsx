import { foodItemsModelTypes, foodItemsTypes } from "../types";

export class FoodItemsModel implements foodItemsModelTypes {
    name: string;
    cost: number;
    foodType: string;
    imageUrl: string;
    id: string;
    rating: number;
    quantity: number;
    constructor(data: foodItemsTypes) {
        this.name = data.name;
        this.cost = data.cost;
        this.foodType = data.food_type;
        this.imageUrl = data.image_url;
        this.id = data.id;
        this.rating = data.rating;
        this.quantity = 0;
    }

    increaseItemQuantity = (): void => {
        this.quantity += 1;
        console.log(this.quantity);
    };

    decreaseItemQuantity = (): void => {
        if (this.quantity > 0) {
            this.quantity -= 1;
        }
    };
}
