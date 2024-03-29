import { createContext, useContext } from "react";

import { ChildProps } from "../../Common/stores/types";
import { HomeRouteServivceAPI } from "../../Common/stores/index.api";

import { RestaurantsListStore } from "../stores/HomeRouteStore/RestaurantsListStore";

const homeRouteServiceInstance = new HomeRouteServivceAPI();

const restaurantsListStoreInstance = new RestaurantsListStore(
    homeRouteServiceInstance
);

const RestaurantsListContext = createContext(restaurantsListStoreInstance);

export const RestaurantsListHook = ({ children }: ChildProps) => (
    <RestaurantsListContext.Provider value={restaurantsListStoreInstance}>
        {children}
    </RestaurantsListContext.Provider>
);

export const useRestaurantsListHook = () => useContext(RestaurantsListContext);
