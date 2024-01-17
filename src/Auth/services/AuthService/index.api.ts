import { AuthReqObjectTypes, AuthSuccessResObjectTypes, AuthFailureResObjectTypes } from "../../stores/Types/loginTypes";

import { AuthServiceType } from "./index";

export class AuthServiceAPI implements AuthServiceType{

    onAuthLogin = async (requestObj: AuthReqObjectTypes): Promise<AuthSuccessResObjectTypes | AuthFailureResObjectTypes> => {

        const options = {
            method: 'POST',
			headers: {
				"Content-Type": "application/json",
			},
            body: JSON.stringify(requestObj)
        }
        const response = await fetch('https://user-access.onrender.com/login', options)
        const data = await response.json()

        return{
            ...data, 
            responseStatus: response.ok
        }
    }
}