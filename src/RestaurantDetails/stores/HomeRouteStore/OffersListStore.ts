import { makeAutoObservable } from "mobx";

import { constraints } from "../../../Common/constraints";

import { HomeServiceType } from "../../services/HomeRouteService/index";

import { OffersListModels } from "../HomeRouteModels/offersListModels/OffersListModels";
import {
    OffersListFetchedResponseTypes,
    OffersListEachObjFetchedTypes,
    OffersListEachObjTypes,
} from "../types";

export class OffersListStore {
    responseStatus: boolean;
    responseData: Array<OffersListEachObjTypes>;
    constraint: string;
    serviceApi: HomeServiceType;

    constructor(serviceApi: HomeServiceType) {
        makeAutoObservable(this);
        this.serviceApi = serviceApi;
        this.responseStatus = false;
        this.responseData = [];
        this.constraint = constraints.initial;
    }

    updateResponseData = (response: OffersListFetchedResponseTypes): void => {
        if (response.responseStatus) {
            this.constraint = constraints.success;
            this.responseStatus = response.responseStatus;
            this.responseData = response.offers.map(
                (eachOffer: OffersListEachObjFetchedTypes) =>
                    new OffersListModels(eachOffer)
            );
        } else {
            this.constraint = constraints.failure;
        }
    }

    fetchOffersList = async (): Promise<void> => {
        console.log(this.serviceApi);
        const response = await this.serviceApi.offersListApiService();
        this.constraint = constraints.loading;
        this.updateResponseData(response);
    };
}
