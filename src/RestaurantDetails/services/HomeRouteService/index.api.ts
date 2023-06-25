import { HomeServiceType } from "./index";

import {
    offersListFetchedResponseTypes,
    restaurantsListFetchedResponseTypes,
} from "../../stores/types";

import { getJwtToken } from "../../../Common/utils/StorageUtils";

export class HomeRouteServivceAPI implements HomeServiceType {
    offersListApiService =
        async (): Promise<offersListFetchedResponseTypes> => {
            const options = {
                method: "GET",
                headers: {
                    authorization: `bearer ${getJwtToken()}`,
                },
            };

            const response = await fetch(
                "https://apis.ccbp.in/restaurants-list/offers",
                options
            );

            const data = await response.json();

            return {
                ...data,
                responseStatus: response.ok,
            };
        };

    restaurantsListApiService = async (
        offset: number,
        limit: number,
        sortByRating: string
    ): Promise<restaurantsListFetchedResponseTypes> => {
        const options = {
            method: "GET",
            headers: {
                authorization: `bearer ${getJwtToken()}`,
            },
        };

        const response = await fetch(
            `https://apis.ccbp.in/restaurants-list?offset=${offset}&limit=${limit}&sort_by_rating=${sortByRating}`,
            options
        );

        const data = await response.json();

        return {
            ...data,
            responseStatus: response.ok,
        };
    };
}
