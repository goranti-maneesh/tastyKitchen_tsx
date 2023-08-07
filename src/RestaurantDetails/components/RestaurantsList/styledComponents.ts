import Popup from "reactjs-popup";
import styled from "styled-components";
import tw from "twin.macro";
import { BsFilterLeft } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

import { ButtonOptionStyleTypes } from "../../stores/types";

export const RestaurantListContainer = styled.div`
    ${tw`pt-16`}

    @media(max-width: 768px) {
        ${tw`pt-23px`}
    }
`;

export const TitleAndSelectContainer = styled.div`
    ${tw`flex justify-between items-end`}

    @media(max-width: 768px) {
        ${tw`flex-col justify-start items-start`}
    }
`;

export const TitleAndDescription = styled.div``;

export const RestaurantsTitle = styled.h1`
    ${tw`text-fs32_lh48 text-nile_blue mb-2 font-bold`}

    @media(max-width: 768px) {
        ${tw`text-fs24_lh32 mb-3`}
    }
`;

export const RestaurantsDescription = styled.p`
    ${tw`text-slate_gray text-fs16_lh24 font-medium`}

    @media(max-width: 768px) {
        ${tw`mb-4`}
    }
`;

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
    ${tw`text-geyser border-solid border-DEFAULT shadow-sortingPopup w-161px h-112px flex flex-col p-2 rounded-xl ml-auto mt-2 bg-white`}

    @media(max-width: 768px) {
        ${tw`ml-0`}
    }
`;

export const ButtonOption = styled.button<ButtonOptionStyleTypes>`
    ${tw`w-145px h-40px pl-4 pr-4 pt-2 pb-2 flex justify-between items-center mt-2 text-fiord text-fs14_lh24 font-medium`}

    ${(props) => props.$sortingBtnBgColor && tw`bg-catskill_white`}

    @media(max-width: 768px) {
        ${tw`text-fs16_lh24`}
    }
`;

export const SortingButton = styled.button`
    ${tw`flex items-center`}
`;

export const SortingText = styled.span`
    ${tw`text-fs16_lh24 ml-3 mr-3 text-fiord font-medium`}
`;

export const FilterIcon = styled(BsFilterLeft)`
    ${tw`w-24px h-24px`}
`;

export const DropDownIcon = styled(IoMdArrowDropdown)`
    ${tw`w-16px h-16px`}
`;

export const RestaurantsLists = styled.div``;

export const RestaurantListUlElement = styled.ul`
    ${tw`flex flex-wrap justify-between`}
`;

export const HorizontalLine = styled.hr`
    ${tw`w-full bg-ghost h-2px mt-6 mb-12`}
`;
