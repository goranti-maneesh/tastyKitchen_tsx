import Slider from "react-slick";

import WrapperComponent from "../../../Common/components/WrapperComponent";

import { offersListEachObjTypes } from "../../stores/types";

import EachOffer from "../EachOffer";

import { OffersUlElement } from "./styledComponents";
import "./index.css";

export const OffersList = (props: any) => {
    const { responseData } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: (dots: any) => {
            return (
                <ul
                    style={{
                        margin: "0px",
                        position: "relative",
                        top: "-30px",
                        color: "white",
                    }}
                >
                    {dots}
                </ul>
            );
        },
    };
    return (
        <WrapperComponent>
            <OffersUlElement>
                <Slider {...settings}>
                    {responseData.map((eachOffer: offersListEachObjTypes) => (
                        <EachOffer key={eachOffer.id} eachOffer={eachOffer} />
                    ))}
                </Slider>
            </OffersUlElement>
        </WrapperComponent>
    );
};
