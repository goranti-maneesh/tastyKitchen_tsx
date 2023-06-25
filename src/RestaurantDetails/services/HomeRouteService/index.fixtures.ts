import { resolveWithTimeout } from '../../../Common/utils/TestUtils'

import offersListFixturesData from '../../fixtures/getOffersList.json'
import restaurantsListFixturesData from '../../fixtures/getRestaurantsList.json'
import {offersListFetchedResponseTypes, restaurantsListFetchedResponseTypes} from '../../stores/types'

import {HomeServiceType} from './index'

export class HomeRouteServivceAPI implements HomeServiceType{
    offersListApiService = (): Promise<offersListFetchedResponseTypes> => {
        return resolveWithTimeout(offersListFixturesData)
    }

    restaurantsListApiService = (offset: number, limit: number, sortByRating: string): Promise<restaurantsListFetchedResponseTypes> => {
        return resolveWithTimeout(restaurantsListFixturesData)
    }
}