import { useContext } from "react";
import { useTranslation } from "react-i18next";

import {
    loginRoute,
    alreadyHaveAccText,
    tastyKitchensLogo,
    tastyKitchensLogoAltText,
} from "../../../Common/constants";

import WrapperComponent from "../../../Common/components/WrapperComponent";
import { ObjContext } from "../../../Common/context";
import InputLabelContainer from "../../../Common/components/InputLabelContainer";

import { RegisterPageProps } from "../../stores/Types/registerTypes";


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

export const RegisterPage = (props: RegisterPageProps): JSX.Element => {
    const {
        onClickSignupForm,
		usernameProps,
		nameProps,
		passwordProps,
		confirmPasswordProps,
		errorMsg,
		apiStatus,
    } = props;

    const { t } = useTranslation();

    const {isDesktopView} = useContext(ObjContext);

    const submitForm = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        onClickSignupForm();
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
                    <LoginHeading>{t("loginPageText.signUpText")}</LoginHeading>
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
            <InputLabelContainer InputLabelPropsObj={usernameProps} />
            <InputLabelContainer InputLabelPropsObj={nameProps} />
            <InputLabelContainer InputLabelPropsObj={passwordProps} />
            <InputLabelContainer InputLabelPropsObj={confirmPasswordProps} />
            <LoginButtonContainer>
                    {errorMsg && (
                        <LoginError>{errorMsg}</LoginError>
                    )}
                <LoginButton type="submit">
                    {apiStatus === "INITIAL"
                        ? t("loginPageText.signUpText")
                        : t("loginPageText.loadingText")}
                </LoginButton>
                <AlreadyHaveAccText>
					{alreadyHaveAccText} -
					<LinkComponent to={loginRoute}> Click here</LinkComponent>
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
