import Cookies from "js-cookie";
import { token } from "../../constants";

export const setToken = (jwtToken: string) => {
    Cookies.set(token, jwtToken, {expires: 24})
}

export const setJwtToken = (jwtToken: string) => {
    setToken(jwtToken)
}

