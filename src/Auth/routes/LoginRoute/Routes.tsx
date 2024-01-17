import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useTranslation } from "react-i18next";
import { RouterProps } from "react-router-dom";

import WrapperComponent from "../../../Common/components/WrapperComponent";
import { getJwtToken } from "../../../Common/utils/StorageUtils";
import { replacePageWith } from "../../../Common/utils/HisyoryUtils";
import {
    homeRoute,
} from "../../../Common/constants";

import { useAuthStore } from "../../hooks/useAuthStore";
import { InputLabelProps } from "../../stores/Types/loginTypes";

import LoginPage from "../../components/LoginPage";
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
        labelText: "USERNAME",
        id: "username",
        placeholder: "Username",
        onChangeMethod: onChangeUsername,
        value: username,
        type: "text",
    };

    const passwordProps: InputLabelProps = {
        labelText: "PASSWORD",
        id: "password",
        placeholder: "Password",
        onChangeMethod: onChangePassword,
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
