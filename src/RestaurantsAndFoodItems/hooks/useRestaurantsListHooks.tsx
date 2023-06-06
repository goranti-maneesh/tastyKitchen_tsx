import {createContext, useContext} from 'react'

import {props} from '../../Common/stores/types'

import {HomeRouteServivceAPI} from '../../Common/stores/index.api'

import { RestaurantsListStore } from '../stores/HomeRouteStore/RestaurantsListStore'

const HomeRouteServiceInstance = new HomeRouteServivceAPI

const restaurantsListStoreInstance = new RestaurantsListStore(HomeRouteServiceInstance)

const RestaurantsListContext = createContext(restaurantsListStoreInstance)

export const RestaurantsListHook = ({children}: props) => (
    <RestaurantsListContext.Provider value={restaurantsListStoreInstance}>
        {children}
    </RestaurantsListContext.Provider>
)

export const useRestaurantsListHook = () => useContext(RestaurantsListContext)