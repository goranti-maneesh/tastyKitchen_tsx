export interface foodItemsTypes {
    name: string;
    cost: number;
    food_type: string;
    image_url: string;
    id: string;
    rating: number;
}

export interface restaurantListItemsTypes {
    rating: number;
    id: string;
    name: string;
    cost_for_two: number;
    cuisine: string;
    image_url: string;
    reviews_count: number;
    opens_at: string;
    location: string;
    items_count: number;
    food_items: Array<foodItemsTypes>;
}

export interface updatedFoodItemsTypes {
    name: string;
    cost: number;
    foodType: string;
    imageUrl: string;
    id: string;
    rating: number;
}

export interface updatedRestaurantListItemsType {
    rating: number;
    id: string;
    name: string;
    costForTwo: number;
    cuisine: string;
    imageUrl: string;
    reviewsCount: number;
    opensAt: string;
    location: string;
    itemsCount: number;
    foodItems: Array<updatedFoodItemsTypes>;
}

export interface foodItemsModelTypes {
    name: string;
    cost: number;
    foodType: string;
    imageUrl: string;
    id: string;
    rating: number;
    quantity: number;
    increaseItemQuantity: () => void;
    decreaseItemQuantity: () => void;
}

export interface fetchedRestaurantListItemsTypes {
    restaurantsList: restaurantListItemsTypes;
    responseStatus: boolean;
}

export interface fetchUpdatedRestaurantListItemsTypes {
    restaurantsList: updatedRestaurantListItemsType;
    responseStatus: boolean;
}

export interface restaurantPosterTypes {
    rating: number;
    id: string;
    name: string;
    costForTwo: number;
    cuisine: string;
    imageUrl: string;
    reviewsCount: number;
    opensAt: string;
    location: string;
    itemsCount: number;
}

export interface matchParamsTypes {
    id: string;
}

export interface FoodItemProps {
    restaurantPoster: restaurantPosterTypes;
    foodItemDetails: Array<foodItemsModelTypes>;
}

export interface eachItemPropsTypes {
    eachItem: foodItemsModelTypes;
}
