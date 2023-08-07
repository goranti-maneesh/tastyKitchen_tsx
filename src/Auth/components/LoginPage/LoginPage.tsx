import { useContext } from "react";
import { useTranslation } from "react-i18next";

import {
    tastyKitchensLogo,
    tastyKitchensLogoAltText,
} from "../../../Common/constants/index";

import WrapperComponent from "../../../Common/components/WrapperComponent";
import { ObjContext } from "../../../Common/context";

import { LoginPageProps } from "../../stores/types";

import InputLabelContainer from "../InputLabelContainer";

import {
    LoginPageContainer,
    FormSection,
    FormCard,
    LogoImg,
    Title,
    LoginHeading,
    FormEle,
    LoginButton,
    LoginError,
    BgImgContainer,
    LoginPageTopSection,
    LoginButtonContainer,
} from "./styledComponents";

export const LoginPage = (props: LoginPageProps): JSX.Element => {
    const {
        userNameProps,
        passwordProps,
        submitMethod,
        authErrorMessage,
        constraint,
    } = props;

    const { t } = useTranslation();

    const {isDesktopView} = useContext(ObjContext);

    const submitForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        submitMethod();
    };

    const renderDesktopViewLoginPage = (): JSX.Element => (
        <LoginPageContainer>
            {console.log("desktop")}
            <FormSection>
                <FormCard>
                    <LogoImg
                        src={tastyKitchensLogo}
                        alt={tastyKitchensLogoAltText}
                    />
                    <Title>{t("loginPageText.title")}</Title>
                    <LoginHeading>{t("loginPageText.loginText")}</LoginHeading>
                    {renderLoginForm()}
                </FormCard>
            </FormSection>
            <BgImgContainer></BgImgContainer>
        </LoginPageContainer>
    );

    const renderMobileViewLoginpage = (): JSX.Element => (
        <LoginPageContainer>
            {console.log("mobile")}
            <LoginPageTopSection>
                <LoginHeading>{t("loginPageText.loginText")}</LoginHeading>
                <BgImgContainer></BgImgContainer>
            </LoginPageTopSection>
            {renderLoginForm()}
        </LoginPageContainer>
    );

    const renderLoginForm = (): JSX.Element => (
        <FormEle onSubmit={submitForm}>
            <InputLabelContainer InputLabelPropsObj={userNameProps} />
            <InputLabelContainer InputLabelPropsObj={passwordProps} />
            <LoginButtonContainer>
                <LoginButton type="submit">
                    {constraint === "INITIAL"
                        ? t("loginPageText.loginText")
                        : t("loginPageText.loadingText")}
                </LoginButton>
                {authErrorMessage && (
                    <LoginError>{authErrorMessage}</LoginError>
                )}
            </LoginButtonContainer>
        </FormEle>
    );

    console.log(isDesktopView, "isDesktopView");

    return (
        <>
            {isDesktopView
                ? renderDesktopViewLoginPage()
                : renderMobileViewLoginpage()}
        </>
    );
};
