import Cookies from "js-cookie";

import { token } from "../../constants";

export const setToken = (jwtToken: string): void => {
    Cookies.set(token, jwtToken, {expires: 24})
}

export const getToken = (): boolean => {
    if(Cookies.get(token) !== undefined){
        return true
    }
    return false
}

export const setJwtToken = (jwtToken: string): void => {
    setToken(jwtToken)
}

export const getJwtToken = (): boolean => {
    return getToken()
}