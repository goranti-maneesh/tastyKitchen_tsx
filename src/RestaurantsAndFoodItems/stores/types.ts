export interface offersListEachObjFetchedTypes {
    image_url: string;
    id: number;
}

export interface offersListEachObjTypes {
    imageUrl: string;
    id: number;
}

export interface offersListFetchedResponseTypes {
    offers: Array<offersListEachObjFetchedTypes>;
    responseStatus: boolean;
}

export interface offersListResponseTypes {
    offers: Array<offersListEachObjTypes>;
    responseStatus: boolean;
}

export interface restaurantsListEachObjFetchedTypes {
    has_online_delivery: boolean;
    user_rating: {
        rating_text: string;
        rating_color: string;
        total_reviews: number;
        rating: number;
    };
    name: string;
    has_table_booking: number;
    is_delivering_now: number;
    cost_for_two: number;
    cuisine: string;
    image_url: string;
    id: string;
    menu_type: string;
    location: string;
    opens_at: string;
    group_by_time: boolean;
}

export interface restaurantsListEachObjTypes {
    hasOnlineDelivery: boolean;
    userRating: {
        ratingText: string;
        ratingColor: string;
        totalReviews: number;
        rating: number;
    };
    name: string;
    hasTableBooking: number;
    isDeliveringNow: number;
    costForTwo: number;
    cuisine: string;
    imageUrl: string;
    id: string;
    menuType: string;
    location: string;
    opensAt: string;
    groupByTime: boolean;
}

export interface restaurantsListFetchedResponseTypes {
    restaurants: Array<restaurantsListEachObjFetchedTypes>;
    total: number;
    responseStatus: boolean;
}

export interface restaurantsListResponseTypes {
    restaurants: Array<restaurantsListEachObjTypes>;
    total: number;
    responseStatus: boolean;
}

export interface eachRestaurantPropTypes{
    eachRestaurant: restaurantsListEachObjTypes
}

export interface ButtonOptionStyleTypes {
    $sortingBtnBgColor: boolean
}

export interface eachOfferProps{
    eachOffer: offersListEachObjTypes
}