export interface FoodItemsTypes {
    name: string;
    cost: number;
    food_type: string;
    image_url: string;
    id: string;
    rating: number;
}

export interface RestaurantListItemsTypes {
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
    food_items: Array<FoodItemsTypes>;
}

export interface UpdatedFoodItemsTypes {
    name: string;
    cost: number;
    foodType: string;
    imageUrl: string;
    id: string;
    rating: number;
    quantity: number;
    price: number;
}

export interface UpdatedRestaurantListItemsType {
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
    foodItems: Array<UpdatedFoodItemsTypes>;
}

export interface FoodItemsModelTypes {
    name: string;
    cost: number;
    foodType: string;
    imageUrl: string;
    id: string;
    rating: number;
    quantity: number;
    price: number;
}

export interface FetchedRestaurantListItemsTypes {
    restaurantsList: RestaurantListItemsTypes;
    responseStatus: boolean;
}

export interface RestaurantPosterTypes {
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

export interface MatchParamsTypes {
    id: string;
}

export interface FoodItemProps {
    restaurantPoster: RestaurantPosterTypes;
    foodItemDetails: Array<FoodItemsModelTypes>;
}

export interface EachItemPropsTypes {
    eachItem: FoodItemsModelTypes;
}

export interface CartItemsPropsTypes {
    eachItem: FoodItemsModelTypes;
    incrementItemQuantity: (id: string) => void;
    decrementItemQuantity: (id: string) => void;
}
