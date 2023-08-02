import { resolveWithTimeout } from "../../../Common/utils/TestUtils";

import offersListFixturesData from "../../fixtures/getOffersList.json";
import restaurantsListFixturesData from "../../fixtures/getRestaurantsList.json";
import {
    OffersListFetchedResponseTypes,
    RestaurantsListFetchedResponseTypes,
} from "../../stores/types";

import { HomeServiceType } from "./index";

export class HomeRouteServivceAPI implements HomeServiceType {
    offersListApiService = (): Promise<OffersListFetchedResponseTypes> => {
        return resolveWithTimeout(offersListFixturesData);
    };

    restaurantsListApiService = (
        offset: number,
        limit: number,
        sortByRating: string
    ): Promise<RestaurantsListFetchedResponseTypes> => {
        return resolveWithTimeout(restaurantsListFixturesData);
    };
}
