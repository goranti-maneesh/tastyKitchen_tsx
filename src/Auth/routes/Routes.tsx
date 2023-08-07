import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { RouterProps } from "react-router-dom";

import WrapperComponent from "../../Common/components/WrapperComponent";
import { getJwtToken } from "../../Common/utils/StorageUtils";
import { replacePageWith } from "../../Common/utils/HisyoryUtils";
import {
    usernameRegex,
    passwordRegex,
    homeRoute,
} from "../../Common/constants";

import { useAuthStore } from "../hooks/useAuthStore";
import { InputLabelProps } from "../stores/types";

import LoginPage from "../components/LoginPage";
import { LoginRouteContainer } from "./styledComponents";

export const LoginRoute = observer((props: RouterProps): JSX.Element => {
    const { t } = useTranslation();

    const authStore = useAuthStore();
    const {
        username,
        password,
        fetchLoginApi,
        authErrorMessage,
        setLoginErrorMsg,
        responseStatus,
        constraint,
    } = authStore;

    const { history } = props;

    const onSubmitLoginForm = async (): Promise<void> => {
        if (username === "" && password === "") {
            setLoginErrorMsg(t("loginErrors.loginButtonError"));
        } else {
            await fetchLoginApi();
            const { responseStatus } = authStore;
            console.log(responseStatus, "responseStatus");
            if (responseStatus) {
                replacePageWith(history, homeRoute);
            }
        }
    };

    const onChangeUsername = (
        event: React.FormEvent<HTMLInputElement>
    ): void => {
        const { setLoginUsername } = authStore;
        setLoginUsername(event.currentTarget.value);
    };

    const onChangePassword = (
        event: React.FormEvent<HTMLInputElement>
    ): void => {
        const { setLoginPassword } = authStore;
        setLoginPassword(event.currentTarget.value);
    };

    const userNameProps: InputLabelProps = {
        regex: usernameRegex,
        labelText: "USERNAME",
        id: "username",
        placeholder: "Username",
        onChangeMethod: onChangeUsername,
        errorMsg: t("loginErrors.loginUsernameError"),
        value: username,
        type: "text",
    };

    const passwordProps: InputLabelProps = {
        regex: passwordRegex,
        labelText: "PASSWORD",
        id: "password",
        placeholder: "Password",
        onChangeMethod: onChangePassword,
        errorMsg: t("loginErrors.loginPasswordError"),
        value: password,
        type: "password",
    };

    useEffect((): void => {
        if (getJwtToken()) {
            replacePageWith(history, homeRoute);
        }
    }, []);

    return (
        <LoginRouteContainer>
            <LoginPage
                userNameProps={userNameProps}
                passwordProps={passwordProps}
                submitMethod={onSubmitLoginForm}
                authErrorMessage={authErrorMessage}
                responseStatus={responseStatus}
                constraint={constraint}
            />
        </LoginRouteContainer>
    );
});
