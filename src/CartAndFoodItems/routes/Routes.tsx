import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";

import { constraints } from "../../Common/constraints";

import { useFoodItemsHook } from "../hooks/useFoodItemsHooks";
import { matchParamsTypes } from "../stores/types";

import { RestaurantItemsContainer } from "./styledComponents";

export const RestaurantItemsRoute = observer(
    (props: RouteComponentProps<matchParamsTypes>) => {
        const foodItems = useFoodItemsHook();

        const {
            constraint,
            response,
            responseStatus,
            restaurantPoster,
            fetchFoodItems,
            getCartListFromLocalStorage,
            updateCartListFromLocalStorage,
        } = foodItems;

        const fetchFoodItemsList = () => {
            const { match } = props;
            const { params } = match;
            const { id } = params;
            fetchFoodItems(id);
        };

        useEffect(() => {
            fetchFoodItemsList();
            getCartListFromLocalStorage();
        }, []);

        useEffect(() => {
            return () => {
                updateCartListFromLocalStorage();
            };
        }, []);

        const renderSuccessViews = () => {};

        const renderLoader = () => {};

        const renderFailureViw = () => {};

        const renderOverAllViews = () => {
            switch (constraint) {
                case constraints.loading:
                    return renderLoader();
                case constraints.success:
                    return renderSuccessViews();
                case constraints.failure:
                    return renderFailureViw();
                default:
                    return null;
            }
        };

        return (
            <RestaurantItemsContainer>
                {renderOverAllViews()}
            </RestaurantItemsContainer>
        );
    }
);
