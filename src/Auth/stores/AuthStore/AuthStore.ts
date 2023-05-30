import { action, makeAutoObservable, runInAction } from "mobx";

import { setJwtToken } from "../../../Common/utils/StorageUtils";
import { constraints } from "../../../Common/constraints";

import { AuthServiceType } from "../../services/AuthService";

import {
    AuthSuccessResObjectTypes,
    AuthFailureResObjectTypes,
    AuthReqObjectTypes,
} from "../types";

export class AuthStore {
    AuthApiService: AuthServiceType;
    responseStatus = true as boolean;
    authErrorMessage = "" as string;
    username = "" as string;
    password = "" as string;
    constraint = constraints.initial as string;

    constructor(AuthServiceApiInstance: AuthServiceType) {
        makeAutoObservable(this);
        this.AuthApiService = AuthServiceApiInstance;
    }

    @action.bound
    setUsername = (username: string): void => {
        this.username = username;
    };

    @action.bound
    setPassword = (password: string): void => {
        this.password = password;
    };

    @action.bound
    setAPIResponse = (
        response: AuthSuccessResObjectTypes | AuthFailureResObjectTypes
    ): void => {
        console.log(response.jwt_token);
        if (response.responseStatus) {
            setJwtToken(response.jwt_token!);
            this.authErrorMessage = "";
        } else {
            this.authErrorMessage = response.error_msg!;
        }
        this.responseStatus = response.responseStatus;
    };

    @action.bound
    setErrorMsg = (errorMsg: string): void => {
        this.authErrorMessage = errorMsg;
    };

    @action.bound
    fetchLoginApi = async (): Promise<void> => {
        this.constraint = constraints.loading;
        const response = await this.AuthApiService.onAuthLogin({
            username: this.username,
            password: this.password,
        });
        console.log(response)
        this.setAPIResponse(response);
        this.constraint = constraints.initial;
    };
}
