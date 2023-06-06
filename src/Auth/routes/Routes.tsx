import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { RouterProps } from "react-router-dom";

import WrapperComponent from "../../Common/components/WrapperComponent";
import { getJwtToken } from "../../Common/utils/StorageUtils";
import {
    usernameRegex,
    passwordRegex,
} from "../../Common/utils/RegularExpressions/LoginCredsRegex";

import { useAuthStore } from "../hooks/useAuthStore";
import { inputLabelProps } from "../stores/types";

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
        setErrorMsg,
        responseStatus,
        constraint,
    } = authStore;

    const { history } = props;

    const onSubmitLoginForm = async (): Promise<void> => {
        if (username === "" && password === "") {
            setErrorMsg(t("loginErrors.loginButtonError"));
        } else {
            await fetchLoginApi();
            const { responseStatus } = authStore;
            if (responseStatus) {
                history.replace("/");
            }
        }
    };

    const onChangeUsername = (
        event: React.FormEvent<HTMLInputElement>
    ): void => {
        const { setUsername } = authStore;
        setUsername(event.currentTarget.value);
    };

    const onChangePassword = (
        event: React.FormEvent<HTMLInputElement>
    ): void => {
        const { setPassword } = authStore;
        setPassword(event.currentTarget.value);
    };

    const userNameProps: inputLabelProps = {
        regex: usernameRegex,
        labelText: "USERNAME",
        id: "username",
        placeholder: "Username",
        onChangeMethod: onChangeUsername,
        errorMsg: t("loginErrors.loginUsernameError"),
        value: username,
        type: "text",
    };

    const passwordProps: inputLabelProps = {
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
            history.replace("/");
        }
    }, []);

    return (
        <LoginRouteContainer>
            <WrapperComponent>
                <LoginPage
                    userNameProps={userNameProps}
                    passwordProps={passwordProps}
                    submitMethod={onSubmitLoginForm}
                    authErrorMessage={authErrorMessage}
                    responseStatus={responseStatus}
                    constraint={constraint}
                />
            </WrapperComponent>
        </LoginRouteContainer>
    );
});
