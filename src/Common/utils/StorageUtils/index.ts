import Cookies from "js-cookie";

import { token } from "../../constants";

export const setToken = (jwtToken: string): void => {
    Cookies.set(token, jwtToken, { expires: 24 });
};

export const getToken = (): string | null => {
    const JwtToken = Cookies.get(token);
    if (JwtToken !== undefined) {
        return JwtToken;
    }
    return null;
};

export const setJwtToken = (jwtToken: string): void => {
    setToken(jwtToken);
};

export const getJwtToken = (): string | null => {
    return getToken();
};

export const removeJwtToken = (): void => {
    Cookies.remove(token);
};
