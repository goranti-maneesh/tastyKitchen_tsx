import { createContext, useContext } from "react";

import { AuthStore } from "../stores/AuthStore/AuthStore";

import { AuthServiceAPI } from "../../Common/stores/index";
import { ChildProps } from "../../Common/stores/types";

const authServiceApiInstance = new AuthServiceAPI();

const authStoreInstance = new AuthStore(authServiceApiInstance);

const AuthContext = createContext(authStoreInstance);

export const AuthHooks = ({ children }: ChildProps) => (
    <AuthContext.Provider value={authStoreInstance}>
        {children}
    </AuthContext.Provider>
);

export const useAuthStore = () => useContext(AuthContext);
