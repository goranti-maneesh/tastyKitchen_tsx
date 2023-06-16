import { eachRestaurantPropTypes } from "../../stores/types";

import {EachRestaurantLi, EachRestaurantLink, RestaurantImage, RestaurantDetailsContainer,
    RestaurantName, RestaurantMenuType, RestaurantRatingContainer, RatingImage, RestaurantRating,
    TotalReviews} from './styledComponents'

export const EachRestaurant = (props: eachRestaurantPropTypes) => {

    const {eachRestaurant} = props

    const {imageUrl, name, menuType, userRating} = eachRestaurant

    return(
        <EachRestaurantLi>
            <EachRestaurantLink to="">
                <RestaurantImage src={imageUrl} alt=""/>
                <RestaurantDetailsContainer>
                    <RestaurantName>{name}</RestaurantName>
                    <RestaurantMenuType>{menuType}</RestaurantMenuType>
                    <RestaurantRatingContainer>
                        <RatingImage/>
                        <RestaurantRating>
                            {userRating.rating}
                        </RestaurantRating>
                        <TotalReviews>
                            {userRating.totalReviews}
                        </TotalReviews>
                    </RestaurantRatingContainer>
                </RestaurantDetailsContainer>
            </EachRestaurantLink>
        </EachRestaurantLi>
    )
}