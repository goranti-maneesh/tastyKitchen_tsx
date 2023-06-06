import {restaurantsListEachObjFetchedTypes} from '../../types'

export class RestaurantsListModels {
    hasOnlineDelivery = false as boolean;
    userRating  = {
        ratingText: "" as string,
        ratingColor: "" as string,
        totalReviews: 0 as number,
        rating: 0 as number
    };
    name = "" as string;
    hasTableBooking = 0 as number;
    isDeliveringNow = 0 as number;
    costForTwo = 0 as number;
    cuisine = "" as string;
    imageUrl = "" as string;
    id = "" as string;
    menuType = "" as string;
    location = "" as string;
    opensAt = "" as string;
    groupByTime = false as boolean;

    constructor(data: restaurantsListEachObjFetchedTypes){
        this.hasOnlineDelivery = data.has_online_delivery
        this.userRating.ratingText = data.user_rating.rating_text
        this.userRating.ratingColor = data.user_rating.rating_color
        this.userRating.totalReviews = data.user_rating.total_reviews
        this.userRating.rating = data.user_rating.rating
        this.name = data.name
        this.hasTableBooking = data.has_table_booking
        this.isDeliveringNow = data.is_delivering_now
        this.costForTwo = data.cost_for_two
        this.cuisine = data.cuisine
        this.imageUrl = data.image_url
        this.id = data.id
        this.menuType = data.menu_type
        this.location = data.location
        this.opensAt = data.opens_at
        this.groupByTime = data.group_by_time
    }
}
