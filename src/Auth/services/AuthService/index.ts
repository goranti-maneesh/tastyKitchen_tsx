import {AuthSuccessResObjectTypes, AuthFailureResObjectTypes, AuthReqObjectTypes} from '../../stores/types'

export interface AuthServiceType {
    onAuthLogin: (requestObj: AuthReqObjectTypes) => Promise<AuthSuccessResObjectTypes | AuthFailureResObjectTypes>
} 