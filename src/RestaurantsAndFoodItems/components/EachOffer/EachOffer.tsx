import { offersListEachObjTypes } from "../../stores/types";

export const EachOffer = (props: any) => {
    const { eachOffer } = props;
    const { imageUrl } = eachOffer;
    return <img src={imageUrl} />;
};
