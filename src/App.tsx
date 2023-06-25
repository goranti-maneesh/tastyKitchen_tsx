import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthHooks } from "./Auth/hooks/useAuthStore";
import { OffersListHook } from "./RestaurantDetails/hooks/useOffersListHooks";
import { RestaurantsListHook } from "./RestaurantDetails/hooks/useRestaurantsListHooks";
import { FoodItemsHook } from "./CartAndFoodItems/hooks/useFoodItemsHooks";
import { ObjContext } from "./Common/context";
import LoginRoute from "./Auth/routes";
import HomeRoute from "./RestaurantDetails/routes";
import RestaurantItemsRoute from "./CartAndFoodItems/routes";

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
    });

    return (
        <ObjContext.Provider value={isDesktopView}>
            <BrowserRouter>
                <AuthHooks>
                    <OffersListHook>
                        <RestaurantsListHook>
                            <FoodItemsHook>
                                <Switch>
                                    <Route
                                        exact
                                        path="/login"
                                        component={LoginRoute}
                                    />
                                    <Route
                                        exact
                                        path="/"
                                        component={HomeRoute}
                                    />
                                    <Route
                                        exact
                                        path="/restaurants/:id"
                                        component={RestaurantItemsRoute}
                                    />
                                </Switch>
                            </FoodItemsHook>
                        </RestaurantsListHook>
                    </OffersListHook>
                </AuthHooks>
            </BrowserRouter>
        </ObjContext.Provider>
    );
};

export default App;
