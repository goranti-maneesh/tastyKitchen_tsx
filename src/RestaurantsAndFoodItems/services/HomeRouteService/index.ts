import {offersListFetchedResponseTypes, restaurantsListFetchedResponseTypes} from '../../stores/types'

export interface HomeServiceType {
    offersListApiService: () => Promise<offersListFetchedResponseTypes>

    restaurantsListApiService: (offset: number, limit: number, sortByRating: string) => Promise<restaurantsListFetchedResponseTypes>
}