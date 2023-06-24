import Slider from "react-slick";

import WrapperComponent from "../../../Common/components/WrapperComponent";

import { offersListEachObjTypes } from "../../stores/types";

import EachOffer from "../EachOffer";

import { OffersUlElement, OffersContainer } from "./styledComponents";
import "./index.css";

export const OffersList = (props: any) => {
    const { responseData } = props;
    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
            <OffersContainer>
                <OffersUlElement>
                    <Slider {...settings}>
                        {responseData.map(
                            (eachOffer: offersListEachObjTypes) => (
                                <EachOffer
                                    key={eachOffer.id}
                                    eachOffer={eachOffer}
                                />
                            )
                        )}
                    </Slider>
                </OffersUlElement>
            </OffersContainer>
        </WrapperComponent>
    );
};
