import { RestaurantsListEachObjFetchedTypes, UserRatingTypes } from "../../types";

export class RestaurantsListModels {
    hasOnlineDelivery: boolean;
    userRating: UserRatingTypes = {
        ratingText: "" as string,
        ratingColor: "" as string,
        totalReviews: 0 as number,
        rating: 0 as number,
    }
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

    constructor(data: RestaurantsListEachObjFetchedTypes) {
        this.hasOnlineDelivery = data.has_online_delivery;
        this.userRating.ratingText = data.user_rating.rating_text;
        this.userRating.ratingColor = data.user_rating.rating_color;
        this.userRating.totalReviews = data.user_rating.total_reviews;
        this.userRating.rating = data.user_rating.rating;
        this.name = data.name;
        this.hasTableBooking = data.has_table_booking;
        this.isDeliveringNow = data.is_delivering_now;
        this.costForTwo = data.cost_for_two;
        this.cuisine = data.cuisine;
        this.imageUrl = data.image_url;
        this.id = data.id;
        this.menuType = data.menu_type;
        this.location = data.location;
        this.opensAt = data.opens_at;
        this.groupByTime = data.group_by_time;
    }
}
