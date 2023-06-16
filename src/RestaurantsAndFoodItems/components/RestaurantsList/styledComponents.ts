import Popup from "reactjs-popup";
import styled from "styled-components";
import tw from "twin.macro";
import { BsFilterLeft } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

import { ButtonOptionStyleTypes } from "../../stores/types";

export const RestaurantListContainer = styled.div``;

export const TitleAndSelectContainer = styled.div`
    ${tw`flex justify-between items-end`}
`;

export const TitleAndDescription = styled.div``;

export const RestaurantsTitle = styled.h1``;

export const RestaurantsDescription = styled.p``;

export const SelectContainer = styled.div``;

export const PopupMainContainer = styled.div``;

export const PopupModalContainer = styled(Popup)`
    &-overlay {
        ${tw``}
    }

    &-content {
        ${tw``}
    }
`;

export const EachOptionContainer = styled.div``;

export const PopupContainer = styled.div`
    ${tw`text-Geyser border-solid border-DEFAULT shadow-sortingPopup w-161px h-112px flex flex-col p-2 rounded-xl mt-2`}
`;

export const ButtonOption = styled.button<ButtonOptionStyleTypes>`
    ${tw`w-145px h-40px pl-4 pr-4 pt-2 pb-2 flex justify-between items-center mt-2 text-Fiord text-fs14_lh24 font-medium`}

    ${(props) => props.$sortingBtnBgColor && tw`bg-Catskill_White`}
`;

export const SortingButton = styled.button`
    ${tw`flex items-center`}
`;

export const SortingText = styled.span`
    ${tw`text-fs16_lh24 ml-3 mr-3 text-Fiord font-medium`}
`;

export const FilterIcon = styled(BsFilterLeft)`
    ${tw`w-24px h-24px`}
`;

export const DropDownIcon = styled(IoMdArrowDropdown)`
    ${tw`w-16px h-16px`}
`;

export const RestaurantsLists = styled.div``

export const RestaurantListUlElement = styled.ul``