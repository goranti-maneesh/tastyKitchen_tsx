import { useTranslation } from "react-i18next";
import { TiTick } from "react-icons/ti";
import { observer } from "mobx-react-lite";

import WrapperComponent from "../../../Common/components/WrapperComponent";

import { useRestaurantsListHook } from "../../hooks/useRestaurantsListHooks";
import { RestaurantsListEachObjTypes } from "../../stores/types";

import Pagination from "../Pagination";

import EachRestaurant from "../EachRestaurant";

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
    RestaurantListUlElement,
    HorizontalLine,
} from "./styledComponents";
import "./index.css";

export const RestaurantsList = observer(() => {
    const { t } = useTranslation();

    const restaurantsStore = useRestaurantsListHook();

    const {
        changeRatingToHighest,
        changeRatingToLowest,
        isSortingHighest,
        fetchRestaurantsList,
        responseData,
    } = restaurantsStore;

    const sortingText = isSortingHighest ? "Highest" : "Lowest";

    const setLowestRating = () => {
        changeRatingToLowest();
        fetchRestaurantsList();
    };

    const setHighestRating = () => {
        changeRatingToHighest();
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
                    <WrapperComponent>
                        <PopupContainer>
                            <EachOptionContainer>
                                <ButtonOption
                                    type="button"
                                    onClick={setLowestRating}
                                    $sortingBtnBgColor={
                                        sortingText === "Lowest"
                                    }
                                >
                                    <p>Lowest</p>
                                    {sortingText === "Lowest" && <TiTick />}
                                </ButtonOption>
                            </EachOptionContainer>
                            <EachOptionContainer>
                                <ButtonOption
                                    type="button"
                                    onClick={setHighestRating}
                                    $sortingBtnBgColor={
                                        sortingText === "Highest"
                                    }
                                >
                                    <p>Highest</p>
                                    {sortingText === "Highest" && <TiTick />}
                                </ButtonOption>
                            </EachOptionContainer>
                        </PopupContainer>
                    </WrapperComponent>
                </PopupModalContainer>
            </PopupMainContainer>
        </SelectContainer>
    );

    const renderRestaurantsList = () => (
        <RestaurantListUlElement>
            {responseData.map((eachRestaurant: RestaurantsListEachObjTypes) => (
                <EachRestaurant
                    key={eachRestaurant.id}
                    eachRestaurant={eachRestaurant}
                />
            ))}
        </RestaurantListUlElement>
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
                <HorizontalLine />
                <RestaurantsLists>{renderRestaurantsList()}</RestaurantsLists>
            </RestaurantListContainer>
            <Pagination />
        </WrapperComponent>
    );
});
