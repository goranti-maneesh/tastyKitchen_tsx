import { action, makeAutoObservable } from "mobx";

import { constraints } from "../../../Common/constraints";

import { HomeServiceType } from "../../services/HomeRouteService/index";

import { OffersListModels } from "../HomeRouteModels/offersListModels/OffersListModels";
import {
    offersListFetchedResponseTypes,
    offersListEachObjFetchedTypes,
    offersListEachObjTypes,
} from "../types";

export class OffersListStore {
    responseStatus = false as boolean;
    responseData = [] as Array<offersListEachObjTypes>;
    constraint = constraints.initial as string;
    serviceApi: HomeServiceType;

    constructor(serviceApi: HomeServiceType) {
        makeAutoObservable(this);
        this.serviceApi = serviceApi;
    }

    @action.bound
    updateResponseData = (response: offersListFetchedResponseTypes) => {
        if (response.responseStatus) {
            this.constraint = constraints.success;
            this.responseStatus = response.responseStatus;
            this.responseData = response.offers.map(
                (eachOffer: offersListEachObjFetchedTypes) =>
                    new OffersListModels(eachOffer)
            );
        } else {
            this.constraint = constraints.failure;
        }
    };

    @action.bound
    fetchOffersList = async (): Promise<void> => {
        this.constraint = constraints.loading;
        const response = await this.serviceApi.offersListApiService();
        this.updateResponseData(response);
    };
}
