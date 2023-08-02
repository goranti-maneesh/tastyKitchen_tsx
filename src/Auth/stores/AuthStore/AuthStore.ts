import { makeAutoObservable } from "mobx";

import { setJwtToken } from "../../../Common/utils/StorageUtils";
import { constraints } from "../../../Common/constraints";

import { AuthServiceType } from "../../services/AuthService";

import { AuthSuccessResObjectTypes, AuthFailureResObjectTypes } from "../types";

export class AuthStore {
    AuthApiService: AuthServiceType;
    responseStatus: boolean;
    authErrorMessage: string;
    username: string;
    password: string;
    constraint: string;

    constructor(AuthServiceApiInstance: AuthServiceType) {
        makeAutoObservable(this);
        this.AuthApiService = AuthServiceApiInstance;
        this.responseStatus = false;
        this.authErrorMessage = "";
        this.username = "";
        this.password = "";
        this.constraint = constraints.initial;
    }

    setLoginUsername = (username: string): void => {
        this.username = username;
    };

    setLoginPassword = (password: string): void => {
        this.password = password;
    };

    setLoginApiSuccessResponse = (
        response: AuthSuccessResObjectTypes
    ): void => {
        setJwtToken(response.jwt_token!);
        this.authErrorMessage = "";
    };

    setLoginApiFailure = (response: AuthFailureResObjectTypes): void => {
        this.authErrorMessage = response.error_msg!;
        this.responseStatus = response.responseStatus;
    };

    setLoginErrorMsg = (errorMsg: string): void => {
        this.authErrorMessage = errorMsg;
    };

    fetchLoginApi = async (): Promise<void> => {
        this.constraint = constraints.loading;
        const response = await this.AuthApiService.onAuthLogin({
            username: this.username,
            password: this.password,
        });
        if ("jwt_token" in response) {
            this.setLoginApiSuccessResponse(response);
        } else {
            this.setLoginApiFailure(response);
        }
        this.constraint = constraints.initial;
    };
}
