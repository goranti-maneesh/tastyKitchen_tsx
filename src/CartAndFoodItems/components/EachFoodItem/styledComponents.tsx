import styled from "styled-components";
import tw from "twin.macro";

export const EachFoodItemContainer = styled.div`
    ${tw`flex items-center w-450px mb-8`}
`;

export const FoodItemImage = styled.img`
    ${tw`h-150px w-255px rounded-lg mr-30px`}
`;

export const FoodItemDetails = styled.div``;

export const FoodItemName = styled.p`
    ${tw`text-fs18_lh24 font-bold text-pickled_bluewood tracking-0.013 mb-2`}
`;

export const FoodItemCost = styled.p`
    ${tw`text-pickled_bluewood text-fs16_lh24 font-medium mb-2`}
`;

export const FoodItemRating = styled.p`
    ${tw`flex mb-2`}
`;

export const FoodRating = styled.span`
    ${tw`text-fs14_lh16 font-bold text-downriver`}
`;

export const AddButton = styled.button`
    ${tw`text-tree_poppy text-fs12_lh16 font-medium w-58px h-8 rounded-lg border-2 border-solid border-tree_poppy outline-none`}
`;

export const QuantityContainer = styled.div`
    ${tw`flex items-center`}
`;

export const PlusMinusButton = styled.button`
    ${tw`rounded-sm p-1 pb-7px pl-5px outline-none w-18px h-18px rounded-sm text-limed_spruce border border-solid border-fiord flex items-center justify-center`}
`;

export const Quantity = styled.p`
    ${tw`text-fiord text-fs16_lh24 mr-10px ml-10px`}
`;
