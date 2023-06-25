import {offersListEachObjFetchedTypes} from '../../types'

export class OffersListModels{
    imageUrl = "" as string
    id = 0 as number
    constructor(data: offersListEachObjFetchedTypes){
        this.imageUrl = data.image_url
        this.id = data.id
    }
}