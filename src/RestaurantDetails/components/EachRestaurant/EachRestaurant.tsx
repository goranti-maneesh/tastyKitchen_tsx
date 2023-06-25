import { useTranslation } from "react-i18next";

import { ratingImg, ratingImgAltText, restaurantImgAltText } from "../../../Common/constants";

import { eachRestaurantPropTypes } from "../../stores/types";

import {
    EachRestaurantLi,
    EachRestaurantLink,
    RestaurantImage,
    RestaurantDetailsContainer,
    RestaurantName,
    RestaurantMenuType,
    RestaurantRatingContainer,
    RatingImage,
    RestaurantRating,
    TotalReviews,
} from "./styledComponents";

export const EachRestaurant = (props: eachRestaurantPropTypes) => {
    const { eachRestaurant } = props;

    const { imageUrl, name, menuType, userRating, id } = eachRestaurant;

    const { t } = useTranslation();

    return (
        <EachRestaurantLink to={`restaurants/${id}`}>
            <EachRestaurantLi>
                <RestaurantImage src={imageUrl} alt={restaurantImgAltText} />
                <RestaurantDetailsContainer>
                    <RestaurantName>{name}</RestaurantName>
                    <RestaurantMenuType>{menuType}</RestaurantMenuType>
                    <RestaurantRatingContainer>
                        <RatingImage src={ratingImg} alt={ratingImgAltText} />
                        <RestaurantRating>{userRating.rating}</RestaurantRating>
                        <TotalReviews>{`(${userRating.totalReviews} ${t(
                            "homeText.ratingsText"
                        )})`}</TotalReviews>
                    </RestaurantRatingContainer>
                </RestaurantDetailsContainer>
            </EachRestaurantLi>
        </EachRestaurantLink>
    );
};
