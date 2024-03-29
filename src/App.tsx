import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import { AuthHooks } from "./Auth/hooks/useAuthStore";
import { RegisterHook } from "./Auth/hooks/useRegisterHooks";
import { OffersListHook } from "./RestaurantDetails/hooks/useOffersListHooks";
import { RestaurantsListHook } from "./RestaurantDetails/hooks/useRestaurantsListHooks";
import { FoodItemsHook } from "./CartAndFoodItems/hooks/useFoodItemsHooks";
import { ObjContext } from "./Common/context";
import {
    cartRoute,
    homeRoute,
    loginRoute,
    registerRoute,
    notFoundRoute,
    orderSuccessRoute,
    restaurantsRoute,
} from "./Common/constants";
import LoginRoute from "./Auth/routes/LoginRoute";
import RegisterRoute from "./Auth/routes/RegisterRoute";
import HomeRoute from "./RestaurantDetails/routes";
import RestaurantItemsRoute from "./CartAndFoodItems/routes";
import CartRoute from "./CartAndFoodItems/components/Cart";
import OrderSuccess from "./CartAndFoodItems/components/OrderSuccess";
import NotFound from "./Common/components/NotFound";
import ProtectedRoute from "./Common/components/ProtectedRoute";

const mediaQuery = window.matchMedia("(min-width: 768px)");

const App = (): JSX.Element => {
    const [isDesktopView, setScreenSize] = useState(
        mediaQuery.matches as boolean
    );

    useEffect(() => {
        const changeScreenSize = (event: MediaQueryListEvent) => {
            setScreenSize(event.matches);
        };

        mediaQuery.onchange = (event) => changeScreenSize(event);
    }, []);

    return (
        <ObjContext.Provider
            value={{
                isDesktopView: isDesktopView,
            }}
        >
            <BrowserRouter>
                <AuthHooks>
                    <RegisterHook>
                    <OffersListHook>
                        <RestaurantsListHook>
                            <FoodItemsHook>
                                <Switch>
                                    <Route
                                        exact
                                        path={loginRoute}
                                        component={LoginRoute}
                                    />
                                    <Route
                                        exact
                                        path={registerRoute}
                                        component={RegisterRoute}
                                    />
                                    <ProtectedRoute
                                        exact
                                        path={homeRoute}
                                        component={HomeRoute}
                                    />
                                    <ProtectedRoute
                                        exact
                                        path={`${restaurantsRoute}/:id`}
                                        component={RestaurantItemsRoute}
                                    />
                                    <ProtectedRoute
                                        exact
                                        path={cartRoute}
                                        component={CartRoute}
                                    />
                                    <ProtectedRoute
                                        exact
                                        path={orderSuccessRoute}
                                        component={OrderSuccess}
                                    />
                                    <Route
                                        exact
                                        path={notFoundRoute}
                                        component={NotFound}
                                    />
                                    <Redirect to={notFoundRoute} />
                                </Switch>
                            </FoodItemsHook>
                        </RestaurantsListHook>
                    </OffersListHook>
                    </RegisterHook>
                </AuthHooks>
            </BrowserRouter>
        </ObjContext.Provider>
    );
};

export default App;
