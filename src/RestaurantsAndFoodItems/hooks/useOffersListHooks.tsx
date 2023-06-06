import {createContext, useContext} from 'react'

import {props} from '../../Common/stores/types'

import {HomeRouteServivceAPI} from '../../Common/stores/index.api'

import { OffersListStore } from '../stores/HomeRouteStore/OffersListStore'

const HomeRouteServiceInstance = new HomeRouteServivceAPI

const offersListStoreInstance = new OffersListStore(HomeRouteServiceInstance)

const OffersListContext = createContext(offersListStoreInstance)

export const OffersListHook = ({children}: props) => (
    <OffersListContext.Provider value={offersListStoreInstance}>
        {children}
    </OffersListContext.Provider>
)

export const useOffersListHook = () => useContext(OffersListContext)