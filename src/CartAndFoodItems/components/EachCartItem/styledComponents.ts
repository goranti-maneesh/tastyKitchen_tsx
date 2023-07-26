import styled from "styled-components";
import tw from "twin.macro";

export const CartItemLiElement = styled.li`
    ${tw`mb-6`}

    @media(max-width: 768px) {
        ${tw`flex`}
    }
`;

export const CartItemContainer = styled.div`
    ${tw`flex justify-between items-center`}

    @media(max-width: 768px) {
        ${tw`flex-col items-start`}
    }
`;

export const ImageTitleContainer = styled.div`
    ${tw`flex items-center`}
`;

export const CartItemImage = styled.img`
    ${tw`w-136px h-100px rounded-lg mr-4`}
`;

export const CartItemName = styled.p`
    ${tw`text-Nile_Blue text-fs20_lh24 font-medium`}
`;

export const QuantityContainer = styled.div`
    ${tw`flex items-center`}
`;

export const CartItemPrice = styled.p`
    ${tw`w-150px text-Sun text-fs16_lh24 font-bold`}
`;

export const PlusMinusButton = styled.button`
    ${tw`rounded-sm p-1 pb-7px pl-5px outline-none w-18px h-18px rounded-sm text-Limed_Spruce border border-solid border-Fiord flex items-center justify-center`}
`;

export const Quantity = styled.p`
    ${tw`text-Fiord text-fs16_lh24 mr-10px ml-10px`}
`;
