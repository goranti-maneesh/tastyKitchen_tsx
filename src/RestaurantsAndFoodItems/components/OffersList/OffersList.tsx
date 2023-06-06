import Slider from "react-slick";

import WrapperComponent from "../../../Common/components/WrapperComponent";

import { offersListEachObjTypes } from "../../stores/types";

import EachOffer from "../EachOffer";
import { OffersUlElement } from "./styledComponents";

export const OffersList = (props: any) => {
    const { responseData } = props;
    console.log(responseData);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <WrapperComponent>
            <OffersUlElement>
                <Slider {...settings}>
                    {responseData.map((eachOffer: offersListEachObjTypes) => (
                        <EachOffer eachOffer={eachOffer} />
                    ))}
                </Slider>
            </OffersUlElement>
        </WrapperComponent>
    );
};
