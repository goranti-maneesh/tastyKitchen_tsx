import { useContext } from "react";
import { useTranslation } from "react-i18next";

import {
    newToTastyKitchenText,
    registerRoute,
    tastyKitchensLogo,
    tastyKitchensLogoAltText,
} from "../../../Common/constants";

import WrapperComponent from "../../../Common/components/WrapperComponent";
import { ObjContext } from "../../../Common/context";

import { LoginPageProps } from "../../stores/Types/loginTypes";

import InputLabelContainer from "../../../Common/components/InputLabelContainer";

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
    AlreadyHaveAccText,
    LinkComponent
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
                <LogoImg
                    src={tastyKitchensLogo}
                    alt={tastyKitchensLogoAltText}
                />
                <Title>{t("loginPageText.title")}</Title>
                <LoginHeading>{t("loginPageText.loginText")}</LoginHeading>
            </LoginPageTopSection>
            {renderLoginForm()}
        </LoginPageContainer>
    );

    const renderLoginForm = (): JSX.Element => (
        <FormEle onSubmit={submitForm}>
            <InputLabelContainer InputLabelPropsObj={userNameProps} />
            <InputLabelContainer InputLabelPropsObj={passwordProps} />
            <LoginButtonContainer>
                    {authErrorMessage && (
                        <LoginError>{authErrorMessage}</LoginError>
                    )}
                <LoginButton type="submit">
                    {constraint === "INITIAL"
                        ? t("loginPageText.loginText")
                        : t("loginPageText.loadingText")}
                </LoginButton>
                <AlreadyHaveAccText>
					{newToTastyKitchenText} -
					<LinkComponent to={registerRoute}>
						{" "}
						Click here
					</LinkComponent>
				</AlreadyHaveAccText>
            </LoginButtonContainer>
        </FormEle>
    );

    return (
        <>
            {isDesktopView
                ? renderDesktopViewLoginPage()
                : renderMobileViewLoginpage()}
        </>
    );
};
