import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

export const CartRouteMainContainer = styled.div``;

export const CartContainer = styled.div``;

export const CartDetailsTitleContainer = styled.div`
    ${tw`flex mt-8 mb-6 justify-between pl-10 pr-10`}
`;

export const CartItemTitle = styled.p`
    ${tw`text-fs20_lh24 font-medium text-Fiord`}
`;

export const CartDetailsContainer = styled.div`
    ${tw`bg-Selago border border-solid border-opacity-10 mt-12 mb-16 pb-12 pl-12 pr-12`}
`;

export const CartListUlElement = styled.ul``;

export const HorizontalLine = styled.hr`
    ${tw`border border-dashed border-Ghost mb-6 mt-2`}

    @media(max-width: 768px) {
        ${tw`mt-0`}
    }
`;

export const TotalPriceSectionContainer = styled.div`
    ${tw`flex justify-between`}
`;

export const OrderTotal = styled.h1`
    ${tw`text-Limed_Spruce text-fs24_lh32 font-medium m-0`}

    @media(max-width: 768px) {
        ${tw`text-fs16_lh24`}
    }
`;

export const TotalPriceContainer = styled.div`
    ${tw`w-150px`}

    @media(max-width: 768px) {
        ${tw`text-center`}
    }

    @media (max-width: 556px) {
        ${tw`text-right`}
    }
`;

export const PlaceOrderButton = styled.button`
    ${tw`text-white text-fs12_lh16 bg-Tree_Poppy rounded-lg cursor-pointer outline-none pt-2 pr-4 pb-2 pl-4 mt-6`}
`;

export const EmptyCartContainer = styled.div`
    ${tw`flex flex-col justify-center items-center h-screen`}
`;

export const EmptyCartImage = styled.img`
    ${tw`w-426px h-367px mb-12`}

    @media (max-width: 768px) {
        ${tw`w-203px h-175px mb-8`}
    }
`;

export const EmptyCartHeading = styled.h1`
    ${tw`text-Mirage text-fs32_lh48 font-medium mb-3 leading-6 text-center`}

    @media (max-width: 768px) {
        ${tw`text-fs20_lh32 `}
    }
`;

export const EmptyCartDescription = styled.p`
    ${tw`text-Slate_Gray text-fs16_lh24 font-normal mb-4 text-center`}

    @media (max-width: 768px) {
        ${tw`text-fs20_lh32 mb-6 `}
    }
`;

export const OrderNowButton = styled.button`
    ${tw`text-white text-fs12_lh16 bg-Tree_Poppy rounded-lg cursor-pointer outline-none pt-2 pr-4 pb-2 pl-4`}
`;

export const CartDetailsContainerMobileView = styled.div`
    ${tw`mt-8 mb-12`}
`;

export const OrderNowLinkComponent = styled(Link)``;
