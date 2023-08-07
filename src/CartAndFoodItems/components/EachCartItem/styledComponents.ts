import styled from "styled-components";
import tw from "twin.macro";

export const CartItemLiElement = styled.li`
    ${tw`mb-6`}

    @media(max-width: 768px) {
        ${tw`flex justify-between`}
    }

    @media (max-width: 556px) {
        ${tw`flex justify-start`}
    }
`;

export const CartItemContainer = styled.div`
    ${tw`flex justify-between items-center`}

    @media(max-width: 768px) {
        ${tw`flex-col items-center`}
    }

    @media (max-width: 556px) {
        ${tw`flex-col justify-between items-start`}
    }
`;

export const ImageTitleContainer = styled.div`
    ${tw`flex items-center`}

    @media (min-width: 768px) {
        ${tw`w-40`}
    }
`;

export const CartItemImage = styled.img`
    ${tw`w-136px h-100px rounded-lg mr-4`}

    @media(max-width: 768px) {
        ${tw`h-90px`}
    }
`;

export const CartItemName = styled.p`
    ${tw`text-nile_blue text-fs20_lh24 font-medium`}

    @media(max-width: 768px) {
        ${tw`text-fs14_lh24`}
    }
`;

export const QuantityContainer = styled.div`
    ${tw`flex items-center`}

    @media (min-width: 768px) {
        ${tw`w-30`}
    }
`;

export const CartItemPrice = styled.p`
    ${tw`w-150px text-sun text-fs16_lh24 font-bold`}

    @media(max-width: 768px) {
        ${tw`text-center`}
    }

    @media (max-width: 556px) {
        ${tw`text-left`}
    }
`;

export const PlusMinusButton = styled.button`
    ${tw`rounded-sm p-1 pb-7px pl-5px outline-none w-18px h-18px rounded-sm text-limed_spruce border border-solid border-fiord flex items-center justify-center`}
`;

export const Quantity = styled.p`
    ${tw`text-fiord text-fs16_lh24 mr-10px ml-10px`}
`;
