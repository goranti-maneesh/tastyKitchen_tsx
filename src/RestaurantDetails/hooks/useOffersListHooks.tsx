import { createContext, useContext } from "react";

import { ChildProps } from "../../Common/stores/types";
import { HomeRouteServivceAPI } from "../../Common/stores/index.api";

import { OffersListStore } from "../stores/HomeRouteStore/OffersListStore";

const HomeRouteServiceInstance = new HomeRouteServivceAPI();

const offersListStoreInstance = new OffersListStore(HomeRouteServiceInstance);

const OffersListContext = createContext(offersListStoreInstance);

export const OffersListHook = ({ children }: ChildProps) => (
    <OffersListContext.Provider value={offersListStoreInstance}>
        {children}
    </OffersListContext.Provider>
);

export const useOffersListHook = () => useContext(OffersListContext);
