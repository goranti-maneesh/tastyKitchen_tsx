import { useContext } from "react";
import { useTranslation } from "react-i18next";

import {
    tastyKitchensLogo,
    tastyKitchensLogoAltText,
} from "../../../Common/constants/index";

import WrapperComponent from "../../../Common/components/WrapperComponent";
import { ObjContext } from "../../../Common/context";

import { loginPageProps } from "../../stores/types";

import InputLabelContainer from "../InputLabelContainer";

import {
    LoginPageContainer,
    LoginPageImg,
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
    LoginButtonContainer
} from "./styledComponents";

export const LoginPage = (props: loginPageProps): JSX.Element => {
    const {
        userNameProps,
        passwordProps,
        submitMethod,
        authErrorMessage,
        constraint,
    } = props;

    const { t } = useTranslation();

    const isDesktopView = useContext(ObjContext);

    const submitForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        submitMethod();
    };

    const renderDesktopViewLoginPage = (): JSX.Element => (
        <LoginPageContainer>
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
            <LoginPageTopSection>
                <LoginHeading>{t("loginPageText.loginText")}</LoginHeading>
                <BgImgContainer></BgImgContainer>
            </LoginPageTopSection>
            {renderLoginForm()}
        </LoginPageContainer>
    );

    const renderLoginForm = (): JSX.Element => (
        <FormEle onSubmit={submitForm}>
            <InputLabelContainer inputLabelPropsObj={userNameProps} />
            <InputLabelContainer inputLabelPropsObj={passwordProps} />
            <LoginButtonContainer>
            <LoginButton type="submit">
                {constraint === "INITIAL"
                    ? t("loginPageText.loginText")
                    : t("loginPageText.loadingText")}
            </LoginButton>
            {authErrorMessage && <LoginError>{authErrorMessage}</LoginError>}
            </LoginButtonContainer>
        </FormEle>
    );

    return (
        <WrapperComponent>
            {isDesktopView
                ? renderDesktopViewLoginPage()
                : renderMobileViewLoginpage()}
        </WrapperComponent>
    );
};
