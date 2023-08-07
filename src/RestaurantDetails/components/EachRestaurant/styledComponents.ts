import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

export const EachRestaurantLi = styled.li`
    ${tw`w-350px flex mb-8 mr-10px`}
`;

export const EachRestaurantLink = styled(Link)``;

export const RestaurantImage = styled.img`
    ${tw`w-160px h-100px rounded-lg mr-4`}
`;

export const RestaurantDetailsContainer = styled.div`
    ${tw`flex flex-col justify-center`}
`;

export const RestaurantName = styled.h1`
    ${tw`text-pickled_bluewood text-fs18_lh24 m-0 mb-1 font-bold `}
`;

export const RestaurantMenuType = styled.p`
    ${tw`text-slate_gray text-fs14_lh24 font-normal m-0 mb-2`}
`;

export const RestaurantRatingContainer = styled.div`
    ${tw`flex items-center`}
`;

export const RatingImage = styled.img`
    ${tw`w-12px h-12px`}
`;

export const RestaurantRating = styled.p`
    ${tw`text-mirage text-fs14_lh18 font-bold m-0 ml-1 mr-1`}
`;

export const TotalReviews = styled.p`
    ${tw`text-slate_gray text-fs12_lh16 font-normal m-0`}
`;
