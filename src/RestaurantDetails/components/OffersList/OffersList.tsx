import Slider from "react-slick";
import { useContext } from "react";

import WrapperComponent from "../../../Common/components/WrapperComponent";
import { ObjContext } from "../../../Common/context";

import { offersListEachObjTypes } from "../../stores/types";

import EachOffer from "../EachOffer";

import { OffersUlElement, OffersContainer } from "./styledComponents";
import "./index.css";

export const OffersList = (props: any) => {
    const { responseData } = props;

    const isDesktopView = useContext(ObjContext);

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

    const renderOffersList = () => (
        <OffersContainer>
            <OffersUlElement>
                <Slider {...settings}>
                    {responseData.map((eachOffer: offersListEachObjTypes) => (
                        <EachOffer key={eachOffer.id} eachOffer={eachOffer} />
                    ))}
                </Slider>
            </OffersUlElement>
        </OffersContainer>
    );

    return isDesktopView ? (
        <WrapperComponent>{renderOffersList()}</WrapperComponent>
    ) : (
        renderOffersList()
    );
};
