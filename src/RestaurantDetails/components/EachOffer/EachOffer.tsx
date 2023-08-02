import { EachOfferProps } from "../../stores/types";

import { EachOfferImg } from "./styledComponents";

export const EachOffer = (props: EachOfferProps) => {
    const { eachOffer } = props;
    const { imageUrl } = eachOffer;
    return <EachOfferImg src={imageUrl} />;
};
