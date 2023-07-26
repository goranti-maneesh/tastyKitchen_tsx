import styled from "styled-components";
import tw from "twin.macro";

export const CartRouteMainContainer = styled.div``;

export const CartContainer = styled.p``;

export const CartDetailsTitleContainer = styled.div`
    ${tw`flex mt-8 mb-6 justify-between pl-10 pr-10`}
`;

export const CartItemTitle = styled.p``;

export const CartDetailsContainer = styled.div`
    ${tw`bg-Selago border border-solid border-opacity-10 mt-12 mb-16 pb-12 pl-12`}
`;

export const CartListUlElement = styled.ul``;

export const HorizontalLine = styled.hr`
    ${tw`border border-dashed border-Ghost mb-6 mt-2`}
`;

export const TotalPriceSectionContainer = styled.div`
    ${tw`flex justify-between items-center`}
`;

export const OrderTotal = styled.h1`
    ${tw`text-Limed_Spruce text-fs24_lh32 font-medium m-0 mb-8`}
`;

export const TotalPriceContainer = styled.div`
    ${tw`w-150px`}
`;

export const PlaceOrderButton = styled.button`
    ${tw`text-white text-fs12_lh16 bg-Tree_Poppy rounded-lg cursor-pointer outline-none pt-2 pr-4 pb-2 pl-4`}
`;

export const EmptyCartContainer = styled.div`
    ${tw`flex flex-col justify-center items-center mt-142px`}
`;

export const EmptyCartImage = styled.img`
    ${tw`w-426px h-367px mb-12`}
`;

export const EmptyCartHeading = styled.h1`
    ${tw`text-Mirage text-fs32_lh48 font-medium mb-3`}
`;

export const EmptyCartDescription = styled.p`
    ${tw`text-Slate_Gray text-fs16_lh24 font-normal mb-4`}
`;

export const OrderNowButton = styled.button`
    ${tw`text-white text-fs12_lh16 bg-Tree_Poppy rounded-lg cursor-pointer outline-none pt-2 pr-4 pb-2 pl-4`}
`;
