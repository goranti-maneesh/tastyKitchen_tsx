import { OffersListEachObjFetchedTypes } from "../../types";

export class OffersListModels {
    imageUrl: string;
    id: number;
    constructor(data: OffersListEachObjFetchedTypes) {
        this.imageUrl = data.image_url;
        this.id = data.id;
    }
}
