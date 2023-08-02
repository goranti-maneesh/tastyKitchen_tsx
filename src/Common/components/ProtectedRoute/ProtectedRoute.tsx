import { Redirect, Route, RouteProps } from "react-router-dom";

import { getJwtToken } from "../../utils/StorageUtils";
import { loginRoute } from "../../constants";

export const ProtectedRoute = (props: RouteProps) => {
    if (getJwtToken() === null) {
        return <Redirect to={loginRoute} />;
    }
    return <Route {...props} />;
};
