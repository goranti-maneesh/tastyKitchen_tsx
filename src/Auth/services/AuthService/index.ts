import {AuthSuccessResObjectTypes, AuthFailureResObjectTypes, AuthReqObjectTypes} from '../../stores/Types/loginTypes'

export interface AuthServiceType {
    onAuthLogin: (requestObj: AuthReqObjectTypes) => Promise<AuthSuccessResObjectTypes | AuthFailureResObjectTypes>
} 