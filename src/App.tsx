import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthHooks } from "./Auth/hooks/useAuthStore";
import { HomeRoute } from "./Auth/components/LoginPage/Routes";

import {ObjContext} from './Common/context'
 
const mediaQuery = window.matchMedia("(min-width: 768px)");

const App = () => {
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
                    <Switch>
                        <Route path="/login" component={HomeRoute} />
                    </Switch>
                </AuthHooks>
            </BrowserRouter>
        </ObjContext.Provider>
    );
};

export default App;
