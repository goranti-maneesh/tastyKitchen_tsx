import { makeAutoObservable } from "mobx";
import { constraints } from "../../../Common/constraints";

import { HomeServiceType } from "../../services/HomeRouteService/index";

import { RestaurantsListModels } from "../HomeRouteModels/restaurantsListModels/RestaurantsListModels";
import {
    restaurantsListEachObjTypes,
    restaurantsListFetchedResponseTypes,
    restaurantsListEachObjFetchedTypes,
} from "../types";

export class RestaurantsListStore {
    limit = 9 as number;
    offset = 0 as number;
    numberOfPages = 0 as number;
    pageNumber = 1 as number;
    sortByRating = "Highest" as string;
    isSortingHighest = true as boolean;
    responseStatus = false as boolean;
    responseData = [] as Array<restaurantsListEachObjTypes>;
    constraint = constraints.initial as string;
    serviceApi: HomeServiceType;

    constructor(serviceApi: HomeServiceType) {
        makeAutoObservable(this);
        this.serviceApi = serviceApi;
    }

    decreaseOffsetValue = (): void => {
        if (this.pageNumber > 1) {
            this.offset -= 9;
            this.pageNumber -= 1;
            this.fetchRestaurantsList();
        }
    };

    increaseOffsetValue = (): void => {
        if (this.pageNumber < this.numberOfPages) {
            this.offset += 9;
            this.pageNumber += 1;
            this.fetchRestaurantsList();
        }
    };

    changeRating = (rating: string): void => {
        this.sortByRating = rating;
    };

    changeRatingToHighest = (ratingStatus: boolean): void => {
        this.isSortingHighest = true;
        this.sortByRating = "Highest";
    };

    changeRatingToLowest = (ratingStatus: boolean): void => {
        this.isSortingHighest = false;
        this.sortByRating = "Lowest";
    };

    updateResponseData = (
        response: restaurantsListFetchedResponseTypes
    ): void => {
        if (response.responseStatus) {
            this.numberOfPages = Math.ceil(response.total / this.limit);
            this.responseStatus = response.responseStatus;
            this.constraint = constraints.success;
            this.responseData = response.restaurants.map(
                (eachRestaurant: restaurantsListEachObjFetchedTypes) =>
                    new RestaurantsListModels(eachRestaurant)
            );
        } else {
            this.constraint = constraints.failure;
        }
    };

    fetchRestaurantsList = async (): Promise<void> => {
        this.constraint = constraints.loading;
        const response = await this.serviceApi.restaurantsListApiService(
            this.offset,
            this.limit,
            this.sortByRating
        );
        this.updateResponseData(response);
    };
}
