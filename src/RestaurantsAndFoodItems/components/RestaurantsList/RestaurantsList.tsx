import { useTranslation } from "react-i18next";
import { useState } from "react";
import { TiTick } from "react-icons/ti";

import WrapperComponent from "../../../Common/components/WrapperComponent";

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

export const RestaurantsList = () => {
    const { t } = useTranslation();

    const [isSortingHighest, setSortingStatus] = useState(false);
    const sortingText = isSortingHighest ? "Highest" : "Lowest";

    const setLowestRating = () => {
        setSortingStatus(false);
    };

    const setHighestRating = () => {
        setSortingStatus(true);
    };

    const renderSelectPopup = () => (
        <SelectContainer>
            <PopupMainContainer className="popup-container">
                <PopupModalContainer
                    modal
                    trigger={
                        <button type="button" className="trigger-button">
                            {`Sort by ${sortingText}`}
                        </button>
                    }
                    closeOnDocumentClick={true}
                    position="top left"
                >
                    <PopupContainer>
                        <EachOptionContainer>
                            <ButtonOption
                                type="button"
                                onClick={setLowestRating}
                            >
                                <p>Lowest</p>
                                {sortingText === "Lowest" && <TiTick />}
                            </ButtonOption>
                        </EachOptionContainer>
                        <EachOptionContainer>
                            <ButtonOption
                                type="button"
                                onClick={setHighestRating}
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
            </RestaurantListContainer>
        </WrapperComponent>
    );
};
