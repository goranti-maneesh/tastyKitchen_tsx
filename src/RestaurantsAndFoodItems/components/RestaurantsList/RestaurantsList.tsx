import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import { observer } from "mobx-react-lite";

import WrapperComponent from "../../../Common/components/WrapperComponent";

import { useRestaurantsListHook } from "../../hooks/useRestaurantsListHooks";
import { restaurantsListEachObjTypes } from "../../stores/types";

import EachRestaurant from '../EachRestaurant'

import {
    RestaurantListContainer,
    TitleAndSelectContainer,
    TitleAndDescription,
    RestaurantsTitle,
    RestaurantsDescription,
    SelectContainer,
    PopupMainContainer,
    EachOptionContainer,
    PopupContainer,
    ButtonOption,
    PopupModalContainer,
    SortingButton,
    SortingText,
    FilterIcon,
    DropDownIcon,
    RestaurantsLists,
    RestaurantListUlElement
} from "./styledComponents";
import "./index.css";

const sortByOptions = [
    {
        id: 0,
        displayText: "Highest",
        value: "Highest",
    },
    {
        id: 1,
        displayText: "Lowest",
        value: "Lowest",
    },
];

export const RestaurantsList = observer(() => {
    const { t } = useTranslation();

    const restaurantsStore = useRestaurantsListHook();

    const {
        changeRatingToHighest,
        changeRatingToLowest,
        isSortingHighest,
        fetchRestaurantsList,
        responseData
    } = restaurantsStore;

    const sortingText = isSortingHighest ? "Highest" : "Lowest";

    const setLowestRating = () => {
        changeRatingToLowest(false);
        fetchRestaurantsList();
    };

    const setHighestRating = () => {
        changeRatingToHighest(true);
        fetchRestaurantsList();
    };

    const renderSelectPopup = () => (
        <SelectContainer>
            <PopupMainContainer className="popup-container">
                <PopupModalContainer
                    modal
                    trigger={
                        <SortingButton type="button" className="trigger-button">
                            <FilterIcon fill="#475569" />
                            <SortingText>{`Sort by ${sortingText}`}</SortingText>
                            <DropDownIcon fill="#475569" />
                        </SortingButton>
                    }
                    closeOnDocumentClick={true}
                    position="top left"
                >
                    <PopupContainer>
                        <EachOptionContainer>
                            <ButtonOption
                                type="button"
                                onClick={setLowestRating}
                                $sortingBtnBgColor={sortingText === "Lowest"}
                            >
                                <p>Lowest</p>
                                {sortingText === "Lowest" && <TiTick />}
                            </ButtonOption>
                        </EachOptionContainer>
                        <EachOptionContainer>
                            <ButtonOption
                                type="button"
                                onClick={setHighestRating}
                                $sortingBtnBgColor={sortingText === "Highest"}
                            >
                                <p>Highest</p>
                                {sortingText === "Highest" && <TiTick />}
                            </ButtonOption>
                        </EachOptionContainer>
                    </PopupContainer>
                </PopupModalContainer>
            </PopupMainContainer>
        </SelectContainer>
    );

    const renderRestaurantsList = () => (
        <RestaurantListUlElement>
            {responseData.map((eachRestaurant: restaurantsListEachObjTypes) => (
                <EachRestaurant key={eachRestaurant.id} eachRestaurant={eachRestaurant}/>
            ))}
        </RestaurantListUlElement>
    )

    return (
        <WrapperComponent>
            <RestaurantListContainer>
                <TitleAndSelectContainer>
                    <TitleAndDescription>
                        <RestaurantsTitle>
                            {t("homeText.title")}
                        </RestaurantsTitle>
                        <RestaurantsDescription>
                            {t("homeText.description")}
                        </RestaurantsDescription>
                    </TitleAndDescription>

                    {renderSelectPopup()}
                </TitleAndSelectContainer>
                <RestaurantsLists>
                    {renderRestaurantsList()}
                </RestaurantsLists>
            </RestaurantListContainer>
        </WrapperComponent>
    );
});
