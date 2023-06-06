import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { withRouter, RouteProps, RouterProps } from "react-router-dom";

import { ObjContext } from "../../context";
import {
    tastyKitchensLogo,
    tastyKitchensLogoAltText,
} from "../../constants/index";

import WrapperComponent from "../WrapperComponent";

import {
    HeaderMainContainer,
    LogoTitleContainer,
    TastyKitchensLogo,
    TastyKitchensTitle,
    DesktopViewContainer,
    HomeCartLogoutUl,
    LiElement,
    LinkComponent,
    LogoutButton,
    OptionsAndCrossIconContainer,
    CrossIconButton,
    CrossIcon,
    MobileViewContainer,
    LogoAndMenuContainer,
    MenuIconButton,
    MenuIcon,
} from "./styledComponents";

const Header = (props: RouterProps) => {
    const isDesktopView = useContext(ObjContext);

    const { t } = useTranslation();

    const { pathname } = props.history.location;

    const [isMenuOpened, setMenuStatus] = useState(false);

    const onClickCrossIcon = () => {
        setMenuStatus(false);
    };

    const onClickMenuIcon = () => {
        setMenuStatus(true);
    };

    const renderLogoAndTitle = () => (
        <LogoTitleContainer>
            <TastyKitchensLogo
                src={tastyKitchensLogo}
                alt={tastyKitchensLogoAltText}
            />
            <TastyKitchensTitle>{t("name")}</TastyKitchensTitle>
        </LogoTitleContainer>
    );

    const renderHomeCartLogoutButtons = () => (
        <HomeCartLogoutUl>
            <LiElement>
                <LinkComponent to="/" $isSelected={pathname === "/"}>
                    {t("headerText.home")}
                </LinkComponent>
            </LiElement>
            <LiElement>
                <LinkComponent to="/cart" $isSelected={pathname === "/cart"}>
                    {t("headerText.cart")}
                </LinkComponent>
            </LiElement>
            <LiElement>
                <LogoutButton>{t("headerText.logout")}</LogoutButton>
            </LiElement>
        </HomeCartLogoutUl>
    );

    const renderDesktopView = () => (
        <DesktopViewContainer>
            {renderLogoAndTitle()}
            {renderHomeCartLogoutButtons()}
        </DesktopViewContainer>
    );

    const renderOptionsAndCrossIcon = () => (
        <OptionsAndCrossIconContainer>
            {renderHomeCartLogoutButtons()}
            <CrossIconButton type="button" onClick={onClickCrossIcon}>
                <CrossIcon />
            </CrossIconButton>
        </OptionsAndCrossIconContainer>
    );

    const renderMobileView = () => (
        <MobileViewContainer>
            <LogoAndMenuContainer>
                {renderLogoAndTitle()}
                <MenuIconButton type="button" onClick={onClickMenuIcon}>
                    <MenuIcon />
                </MenuIconButton>
            </LogoAndMenuContainer>
            {isMenuOpened && renderOptionsAndCrossIcon()}
        </MobileViewContainer>
    );

    return (
        <WrapperComponent>
            <HeaderMainContainer>
                {isDesktopView ? renderDesktopView() : renderMobileView()}
            </HeaderMainContainer>
        </WrapperComponent>
    );
};

export const HeaderWithRouter = withRouter(Header);
