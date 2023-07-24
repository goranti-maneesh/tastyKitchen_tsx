import { Redirect, Route, RouteProps } from "react-router-dom";
import { getJwtToken } from "../../utils/StorageUtils";

export const ProtectedRoute = (props: RouteProps) => {
    if (getJwtToken() === null) {
        return <Redirect to="/login" />;
    }
    return <Route {...props} />;
};
