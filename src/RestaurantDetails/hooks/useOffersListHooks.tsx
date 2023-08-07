import { createContext, useContext } from "react";

import { ChildProps } from "../../Common/stores/types";
import { HomeRouteServivceAPI } from "../../Common/stores/index.api";

import { OffersListStore } from "../stores/HomeRouteStore/OffersListStore";

const homeRouteServiceInstance = new HomeRouteServivceAPI();

const offersListStoreInstance = new OffersListStore(homeRouteServiceInstance);

const OffersListContext = createContext(offersListStoreInstance);

export const OffersListHook = ({ children }: ChildProps) => (
    <OffersListContext.Provider value={offersListStoreInstance}>
        {children}
    </OffersListContext.Provider>
);

export const useOffersListHook = () => useContext(OffersListContext);
