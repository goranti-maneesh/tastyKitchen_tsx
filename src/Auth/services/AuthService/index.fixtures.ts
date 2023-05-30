import {resolveWithTimeout} from '../../../Common/utils/TestUtils'

import { AuthReqObjectTypes, AuthSuccessResObjectTypes } from "../../stores/types";
import AuthResponseObj from '../../fixtures/getAuthResponse.json'

import { AuthServiceType } from "./index";

export class AuthServiceAPI implements AuthServiceType{
    onAuthLogin = (requestObj: AuthReqObjectTypes): Promise<AuthSuccessResObjectTypes> => {
        return resolveWithTimeout(AuthResponseObj)
    }
}