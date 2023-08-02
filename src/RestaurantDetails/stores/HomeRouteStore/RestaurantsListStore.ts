import { makeAutoObservable } from "mobx";
import { constraints } from "../../../Common/constraints";

import { HomeServiceType } from "../../services/HomeRouteService/index";

import { RestaurantsListModels } from "../HomeRouteModels/restaurantsListModels/RestaurantsListModels";
import {
    RestaurantsListEachObjTypes,
    RestaurantsListFetchedResponseTypes,
    RestaurantsListEachObjFetchedTypes,
} from "../types";

export class RestaurantsListStore {
    limit: number;
    offset: number;
    numberOfPages: number;
    pageNumber: number;
    sortByRating: string;
    isSortingHighest: boolean;
    responseStatus: boolean;
    responseData: Array<RestaurantsListEachObjTypes>;
    constraint: string;
    serviceApi: HomeServiceType;

    constructor(serviceApi: HomeServiceType) {
        makeAutoObservable(this);
        this.serviceApi = serviceApi;
        this.limit = 9;
        this.offset = 0;
        this.numberOfPages = 0;
        this.pageNumber = 1;
        this.sortByRating = "Highest";
        this.isSortingHighest = true;
        this.responseStatus = false;
        this.responseData = [];
        this.constraint = constraints.initial;
    }

    decreaseOffsetValue = (): void => {
        if (this.pageNumber > 1) {
            this.offset -= 9;
            this.pageNumber -= 1;
            this.fetchRestaurantsList();
        }
    }

    increaseOffsetValue = (): void => {
        if (this.pageNumber < this.numberOfPages) {
            this.offset += 9;
            this.pageNumber += 1;
            this.fetchRestaurantsList();
        }
    }

    changeRating = (rating: string): void => {
        this.sortByRating = rating;
    }

    changeRatingToHighest = (): void => {
        this.isSortingHighest = true;
        this.sortByRating = "Highest";
    };

    changeRatingToLowest = (): void => {
        this.isSortingHighest = false;
        this.sortByRating = "Lowest";
    };

    updateResponseData = (response: RestaurantsListFetchedResponseTypes): void => {
        if (response.responseStatus) {
            this.numberOfPages = Math.ceil(response.total / this.limit);
            this.responseStatus = response.responseStatus;
            this.constraint = constraints.success;
            this.responseData = response.restaurants.map(
                (eachRestaurant: RestaurantsListEachObjFetchedTypes) =>
                    new RestaurantsListModels(eachRestaurant)
            );
        } else {
            this.constraint = constraints.failure;
        }
    }

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
