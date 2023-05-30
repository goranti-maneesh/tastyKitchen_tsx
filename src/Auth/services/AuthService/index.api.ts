import { AuthReqObjectTypes, AuthSuccessResObjectTypes, AuthFailureResObjectTypes } from "../../stores/types";

import { AuthServiceType } from "./index";

export class AuthServiceAPI implements AuthServiceType{

    onAuthLogin = async (requestObj: AuthReqObjectTypes): Promise<AuthSuccessResObjectTypes | AuthFailureResObjectTypes> => {

        const options = {
            method: 'POST',
            body: JSON.stringify(requestObj)
        }
        const response = await fetch('https://apis.ccbp.in/login', options)
        const data = await response.json()

        return{
            ...data, 
            responseStatus: response.ok
        }
    }
}