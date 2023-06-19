import { eachOfferProps } from "../../stores/types";

import {EachOfferImg} from './styledComponents'

export const EachOffer = (props: eachOfferProps) => {
    const { eachOffer } = props;
    const { imageUrl } = eachOffer;
    return <EachOfferImg src={imageUrl} />;
};
