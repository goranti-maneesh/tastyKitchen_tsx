import { observer } from "mobx-react-lite";

import { useRestaurantsListHook } from "../../hooks/useRestaurantsListHooks";

import {
    PaginationContainer,
    PaginationButton,
    LeftArrowIcon,
    RightArrowIcon,
    PageNumbers,
} from "./styledComponents";

export const Pagination = observer(() => {
    const restaurantsStore = useRestaurantsListHook();

    const {
        pageNumber,
        numberOfPages,
        decreaseOffsetValue,
        increaseOffsetValue,
    } = restaurantsStore;

    const onClickNextPage = () => {
        increaseOffsetValue();
    };

    const onClickPreviousPage = () => {
        decreaseOffsetValue();
    };

    return (
        <PaginationContainer>
            <PaginationButton type="button" onClick={onClickPreviousPage}>
                <LeftArrowIcon />
            </PaginationButton>
            <PageNumbers>{` ${pageNumber} of ${numberOfPages} `}</PageNumbers>
            <PaginationButton type="button" onClick={onClickNextPage}>
                <RightArrowIcon />
            </PaginationButton>
        </PaginationContainer>
    );
});
