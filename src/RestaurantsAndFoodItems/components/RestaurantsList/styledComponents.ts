import Popup from "reactjs-popup";
import styled from "styled-components";
import tw from "twin.macro";

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
    ${tw``}
`;

export const ButtonOption = styled.button``;
