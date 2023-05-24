import { AuthReqObjectTypes, AuthSuccessResObjectTypes, AuthFailureResObjectTypes } from "../../stores/types";
import { AuthServiceType } from "./index";
import {resolveWithTimeout} from '../../../Common/utils/TestUtils'
import AuthResponseObj from '../../fixtures/getAuthResponse.json'

export class AuthServiceAPI implements AuthServiceType{
    onAuthLogin = (requestObj: AuthReqObjectTypes): Promise<AuthSuccessResObjectTypes> => {
        return resolveWithTimeout(AuthResponseObj)
    }
}