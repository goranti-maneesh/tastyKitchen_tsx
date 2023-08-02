export interface OffersListEachObjFetchedTypes {
    image_url: string;
    id: number;
}

export interface OffersListEachObjTypes {
    imageUrl: string;
    id: number;
}

export interface OffersListFetchedResponseTypes {
    offers: Array<OffersListEachObjFetchedTypes>;
    responseStatus: boolean;
}

export interface OffersListResponseTypes {
    offers: Array<OffersListEachObjTypes>;
    responseStatus: boolean;
}

export interface RestaurantsListEachObjFetchedTypes {
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

export interface UserRatingTypes{
    ratingText: string;
    ratingColor: string;
    totalReviews: number;
    rating: number;
}

export interface RestaurantsListEachObjTypes {
    hasOnlineDelivery: boolean;
    userRating: UserRatingTypes
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

export interface RestaurantsListFetchedResponseTypes {
    restaurants: Array<RestaurantsListEachObjFetchedTypes>;
    total: number;
    responseStatus: boolean;
}

export interface RestaurantsListResponseTypes {
    restaurants: Array<RestaurantsListEachObjTypes>;
    total: number;
    responseStatus: boolean;
}

export interface EachRestaurantPropTypes {
    eachRestaurant: RestaurantsListEachObjTypes;
}

export interface ButtonOptionStyleTypes {
    $sortingBtnBgColor: boolean;
}

export interface EachOfferProps {
    eachOffer: OffersListEachObjTypes;
}
