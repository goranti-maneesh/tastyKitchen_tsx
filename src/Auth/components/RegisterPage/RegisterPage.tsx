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
    RegisterPageContainer,
    FormSection,
    FormCard,
    LogoImg,
    Title,
    SignupHeading,
    FormEle,
    SignupButton,
    SignupError,
    BgImgContainer,
    SignupPageTopSection,
    SignupButtonContainer,
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
        <RegisterPageContainer>
            <FormSection>
                <FormCard>
                    <LogoImg
                        src={tastyKitchensLogo}
                        alt={tastyKitchensLogoAltText}
                    />
                    <Title>{t("loginPageText.title")}</Title>
                    <SignupHeading>{t("loginPageText.signUpText")}</SignupHeading>
                    {renderLoginForm()}
                </FormCard>
            </FormSection>
            <BgImgContainer></BgImgContainer>
        </RegisterPageContainer>
    );

    const renderMobileViewLoginpage = (): JSX.Element => (
        <RegisterPageContainer>
            <SignupPageTopSection>
                <LogoImg
                    src={tastyKitchensLogo}
                    alt={tastyKitchensLogoAltText}
                />
                <Title>{t("loginPageText.title")}</Title>
                <SignupHeading>{t("loginPageText.signUpText")}</SignupHeading>
            </SignupPageTopSection>
            {renderLoginForm()}
        </RegisterPageContainer>
    );

    const renderLoginForm = (): JSX.Element => (
        <FormEle onSubmit={submitForm}>
            <InputLabelContainer InputLabelPropsObj={usernameProps} />
            <InputLabelContainer InputLabelPropsObj={nameProps} />
            <InputLabelContainer InputLabelPropsObj={passwordProps} />
            <InputLabelContainer InputLabelPropsObj={confirmPasswordProps} />
            <SignupButtonContainer>
                    {errorMsg && (
                        <SignupError>{errorMsg}</SignupError>
                    )}
                <SignupButton type="submit">
                    {apiStatus === "INITIAL"
                        ? t("loginPageText.signUpText")
                        : t("loginPageText.loadingText")}
                </SignupButton>
                <AlreadyHaveAccText>
					{alreadyHaveAccText} -
					<LinkComponent to={loginRoute}> Click here</LinkComponent>
				</AlreadyHaveAccText>
            </SignupButtonContainer>
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
