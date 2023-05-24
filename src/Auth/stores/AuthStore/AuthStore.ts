import { AuthServiceType } from "../../services/AuthService";
import { makeAutoObservable } from "mobx";
import {
  AuthSuccessResObjectTypes,
  AuthFailureResObjectTypes,
  AuthReqObjectTypes,
} from "../types";
import { setJwtToken } from "../../../Common/utils/StorageUtils";

export class AuthStore {
  AuthApiService: AuthServiceType;
  responseStatus = true as boolean;
  authErrorMessage = "" as string;
  username = "" as string;
  password = "" as string;

  constructor(AuthServiceApiInstance: AuthServiceType) {
    makeAutoObservable(this);
    this.AuthApiService = AuthServiceApiInstance;
  }

  setUsername = (username: string) => {
    this.username = username;
  };

  setPassword = (password: string) => {
    this.password = password;
  };

  setAPIResponse = (
    response: AuthSuccessResObjectTypes | AuthFailureResObjectTypes
  ) => {
    if (response.responseStatus) {
      setJwtToken(response.jwtToken!);
    } else {
      this.authErrorMessage = response.error_msg!;
    }
    this.responseStatus = response.responseStatus;
  };

  fetchLoginApi = async () => {
    const response = await this.AuthApiService.onAuthLogin({
      username: this.username,
      password: this.password,
    });

    this.setAPIResponse(response);
  };
}
