import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthHooks } from "./Auth/hooks/useAuthStore";
import { OffersListHook } from "./RestaurantsAndFoodItems/hooks/useOffersListHooks";
import { RestaurantsListHook } from "./RestaurantsAndFoodItems/hooks/useRestaurantsListHooks";
import { ObjContext } from "./Common/context";
import LoginRoute from "./Auth/routes";
import HomeRoute from "./RestaurantsAndFoodItems/routes";

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
                            <Switch>
                                <Route
                                    exact
                                    path="/login"
                                    component={LoginRoute}
                                />
                                <Route exact path="/" component={HomeRoute} />
                            </Switch>
                        </RestaurantsListHook>
                    </OffersListHook>
                </AuthHooks>
            </BrowserRouter>
        </ObjContext.Provider>
    );
};

export default App;
