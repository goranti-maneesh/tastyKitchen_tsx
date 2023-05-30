import { AuthServiceType } from "../../services/AuthService";
import { action, makeAutoObservable, runInAction } from "mobx";
import {
    AuthSuccessResObjectTypes,
    AuthFailureResObjectTypes,
    AuthReqObjectTypes,
} from "../types";
import { setJwtToken } from "../../../Common/utils/StorageUtils";
import { constraints } from "../../../Common/constraints";

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
        if (response.responseStatus) {
            setJwtToken(response.jwtToken!);
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
        this.setAPIResponse(response);
        this.constraint = constraints.initial;
    };
}
