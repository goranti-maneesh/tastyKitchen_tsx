import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import Header from "../../Common/components/Header";
import { constraints } from "../../Common/constraints";

import { useOffersListHook } from "../hooks/useOffersListHooks";
import { useRestaurantsListHook } from "../hooks/useRestaurantsListHooks";
import OffersList from "../components/OffersList";
import RestaurantsList from "../components/RestaurantsList";

import { HomeRouteMainContainer } from "./styledComponents";

export const HomeRoute = observer((): JSX.Element => {
    const offersListHook = useOffersListHook();

    const restaurantsListHook = useRestaurantsListHook();

    const getOffersList = () => {
        const { fetchOffersList } = offersListHook;
        fetchOffersList();
    };

    const getRestaurantsList = () => {
        const { fetchRestaurantsList } = restaurantsListHook;
        fetchRestaurantsList();
    };

    useEffect(() => {
        getOffersList();
        getRestaurantsList();
    }, []);

    const renderOffersList = () => {
        const {responseData} = offersListHook
        return(
            <OffersList responseData={responseData}/>
        )
    };

    const renderRestaurantsList = () => <RestaurantsList />;

    const offersListOverAllViews = () => {
        const { constraint } = offersListHook;
        switch (constraint) {
            case constraints.loading:
                return null;
            case constraints.success:
                return renderOffersList();
            case constraints.failure:
                return null;
            default:
                return null;
        }
    };

    const restaurantsListOverAllViews = () => {
        const { constraint } = restaurantsListHook;
        console.log(constraint);
        switch (constraint) {
            case constraints.loading:
                return null;
            case constraints.success:
                return renderRestaurantsList();
            case constraints.failure:
                return null;
            default:
                return null;
        }
    };

    return (
        <HomeRouteMainContainer>
            <Header />
            {offersListOverAllViews()}
            {restaurantsListOverAllViews()}
        </HomeRouteMainContainer>
    );
});
