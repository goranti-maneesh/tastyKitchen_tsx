import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";

import { constraints } from "../../Common/constraints";
import Loading from "../../Common/components/Loader";
import Failure from "../../Common/components/Failure";
import Header from "../../Common/components/Header";
import Footer from "../../Common/components/Footer";

import { useFoodItemsHook } from "../hooks/useFoodItemsHooks";
import { matchParamsTypes } from "../stores/types";
import FoodItems from "../components/FoodItems";

import {
    RestaurantItemsContainer,
    LoaderViewContainer,
} from "./styledComponents";

export const RestaurantItemsRoute = observer(
    (props: RouteComponentProps<matchParamsTypes>) => {
        const foodItems = useFoodItemsHook();

        const {
            constraint,
            response,
            responseStatus,
            restaurantPoster,
            fetchFoodItems,
        } = foodItems;

        const fetchFoodItemsList = () => {
            const { match } = props;
            const { params } = match;
            const { id } = params;
            fetchFoodItems(id);
        };

        useEffect(() => {
            fetchFoodItemsList();
            // getCartListFromLocalStorage();
        }, []);

        // useEffect(() => {
        //     return () => {
        //         updateCartListInLocalStorage();
        //     };
        // }, []);

        const renderSuccessViews = () => (
            <FoodItems
                restaurantPoster={restaurantPoster}
                foodItemDetails={response}
            />
        );

        const renderLoader = () => (
            <LoaderViewContainer>
                <Loading />
            </LoaderViewContainer>
        );

        const renderFailureViw = () => (
            <LoaderViewContainer>
                <Failure />
            </LoaderViewContainer>
        );

        const renderOverAllViews = () => {
            console.log(constraint, "constraint");
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
                <Header />
                {renderOverAllViews()}
                <Footer />
            </RestaurantItemsContainer>
        );
    }
);
