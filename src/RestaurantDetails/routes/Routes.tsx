import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import Header from "../../Common/components/Header";
import { constraints } from "../../Common/constants";
import Loading from "../../Common/components/Loader";
import Failure from "../../Common/components/Failure";
import Footer from "../../Common/components/Footer";

import { useOffersListHook } from "../hooks/useOffersListHooks";
import { useRestaurantsListHook } from "../hooks/useRestaurantsListHooks";
import OffersList from "../components/OffersList";
import RestaurantsList from "../components/RestaurantsList";

import {
    HomeRouteMainContainer,
    LoaderViewContainer,
    RestaurantsListMainContainer,
} from "./styledComponents";

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

    const renderLoader = () => (
        <LoaderViewContainer>
            <Loading />
        </LoaderViewContainer>
    );

    const renderFailure = () => (
        <LoaderViewContainer>
            <Failure />
        </LoaderViewContainer>
    );

    const renderOffersList = () => {
        const { responseData } = offersListHook;
        return <OffersList responseData={responseData} />;
    };

    const renderRestaurantsList = () => <RestaurantsList />;

    const offersListOverAllViews = () => {
        const { constraint } = offersListHook;
        switch (constraint) {
            case constraints.loading:
                return renderLoader();
            case constraints.success:
                return renderOffersList();
            case constraints.failure:
                return renderFailure();
            default:
                return null;
        }
    };

    const restaurantsListOverAllViews = () => {
        const { constraint } = restaurantsListHook;
        switch (constraint) {
            case constraints.loading:
                return renderLoader();
            case constraints.success:
                return renderRestaurantsList();
            case constraints.failure:
                return renderFailure();
            default:
                return null;
        }
    };

    return (
        <HomeRouteMainContainer>
            <Header />
            {offersListOverAllViews()}
            {restaurantsListOverAllViews()}
            <Footer />
        </HomeRouteMainContainer>
    );
});
