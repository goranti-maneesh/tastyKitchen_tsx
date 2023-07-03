import styled from "styled-components";
import tw from "twin.macro";
import { BsStarFill } from "react-icons/bs";

export const FoodItemsMainContainer = styled.div``;

export const PosterMainContainer = styled.div`
    ${tw`bg-restaurantPosterBGImage bg-cover w-full bg-Mine_Shaft h-344px pt-1px`}

    @media(max-width: 768px) {
        ${tw`h-188px`}
    }
`;

export const PosterContainer = styled.div`
    ${tw`max-w-1110px w-89vw m-auto flex items-center h-full`}

    @media(max-width: 768px) {
        ${tw`w-full`}
    }
`;

export const PosterImage = styled.img`
    ${tw`h-280px w-445px rounded-lg mr-30px`}

    @media(max-width: 768px) {
        ${tw`h-221px w-221px rounded-133px -mt-54px -ml-68px mb-21px mr-4`}
    }
`;

export const PosterDetailsContainer = styled.div``;

export const RestaurantName = styled.h1`
    ${tw`text-white text-fs36_lh48 font-medium mb-1`}

    @media(max-width: 768px) {
        ${tw`text-fs16_lh24 m-0`}
    }
`;

export const RestaurantCuisine = styled.p`
    ${tw`text-white text-fs16_lh24 font-normal mt-2`}

    @media(max-width: 768px) {
        ${tw`text-fs12_lh16`}
    }
`;

export const RestaurantLocation = styled.p`
    ${tw`text-white text-fs16_lh24 font-normal mt-2`}

    @media(max-width: 768px) {
        ${tw`text-fs12_lh16`}
    }
`;

export const RatingsAndCostContainer = styled.div`
    ${tw`mt-4 flex items-center`}
`;

export const RatingsContainer = styled.div``;

export const Ratings = styled.div`
    ${tw`flex items-center mb-1`}
`;

export const RatingIcon = styled(BsStarFill)`
    ${tw`w-3 h-3 mr-1 `}
`;

export const RestaurantRating = styled.p`
    ${tw`text-white text-fs14_lh16 font-bold`}

    @media(max-width: 768px) {
        ${tw`text-fs12_lh16`}
    }
`;

export const RatingsCount = styled.p`
    ${tw`text-Catskill_White font-normal text-fs12_lh16 `}
`;

export const HorizontalLine = styled.hr`
    ${tw`ml-8 mr-8 w-1px h-33px bg-Catskill_White`}

    @media(max-width: 768px) {
        ${tw`ml-4 mr-4`}
    }
`;

export const CostContainer = styled.div``;

export const Cost = styled.p`
    ${tw`text-white text-fs14_lh16 font-bold mb-1`}

    @media(max-width: 768px) {
        ${tw`text-fs12_lh16`}
    }
`;

export const CostForTwoText = styled.p`
    ${tw`text-Catskill_White text-fs12_lh16`}
`;

export const FoodItemsUlElement = styled.div`
    ${tw`flex mt-16 flex-wrap mb-16 justify-between`}
`