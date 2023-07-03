import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

import WrapperComponent from "../../../Common/components/WrapperComponent";

import { FoodItemProps } from "../../stores/types";

import {
    FoodItemsMainContainer,
    PosterMainContainer,
    PosterContainer,
    PosterImage,
    PosterDetailsContainer,
    RestaurantName,
    RestaurantCuisine,
    RestaurantLocation,
    RatingsAndCostContainer,
    RatingsContainer,
    Ratings,
    RatingIcon,
    RestaurantRating,
    RatingsCount,
    HorizontalLine,
    CostContainer,
    Cost,
    CostForTwoText,
    FoodItemsUlElement,
} from "./styledComponents";
import EachFoodItem from "../EachFoodItem";

export const FoodItems = observer((props: FoodItemProps) => {
    const { t } = useTranslation();

    const { foodItemDetails, restaurantPoster } = props;

    const {
        rating,
        id,
        name,
        costForTwo,
        cuisine,
        imageUrl,
        reviewsCount,
        opensAt,
        location,
        itemsCount,
    } = restaurantPoster;

    // console.log(foodItemDetails, "foodItemDetails");

    const renderPoster = () => (
        <PosterMainContainer>
            <PosterContainer>
                <PosterImage src={imageUrl} alt={name} />
                <PosterDetailsContainer>
                    <RestaurantName>{name}</RestaurantName>
                    <RestaurantCuisine>{cuisine}</RestaurantCuisine>
                    <RestaurantLocation>{location}</RestaurantLocation>
                    <RatingsAndCostContainer>
                        <RatingsContainer>
                            <Ratings>
                                <RatingIcon fill="#ffffff" />
                                <RestaurantRating>{rating}</RestaurantRating>
                            </Ratings>
                            <RatingsCount>
                                {`${reviewsCount}+ ratings`}
                            </RatingsCount>
                        </RatingsContainer>
                        <HorizontalLine />
                        <CostContainer>
                            <Cost>{`₹ ${costForTwo}`}</Cost>
                            <CostForTwoText>{t("costForTwo")}</CostForTwoText>
                        </CostContainer>
                    </RatingsAndCostContainer>
                </PosterDetailsContainer>
            </PosterContainer>
        </PosterMainContainer>
    );

    const renderFoodItems = () => {
        return (
            <FoodItemsUlElement>
                {foodItemDetails.map((eachItem) => {
                    return (
                        <EachFoodItem key={eachItem.id} eachItem={eachItem} />
                    );
                })}
            </FoodItemsUlElement>
        );
    };

    return (
        <FoodItemsMainContainer>
            {renderPoster()}
            <WrapperComponent>{renderFoodItems()}</WrapperComponent>
        </FoodItemsMainContainer>
    );
});
