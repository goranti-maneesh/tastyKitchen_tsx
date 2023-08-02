import {
    OffersListFetchedResponseTypes,
    RestaurantsListFetchedResponseTypes,
} from "../../stores/types";

export interface HomeServiceType {
    offersListApiService: () => Promise<OffersListFetchedResponseTypes>;

    restaurantsListApiService: (
        offset: number,
        limit: number,
        sortByRating: string
    ) => Promise<RestaurantsListFetchedResponseTypes>;
}
