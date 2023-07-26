import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import { withRouter, RouteProps, RouterProps } from "react-router-dom";

import { ObjContext } from "../../context";
import {
    tastyKitchensLogo,
    tastyKitchensLogoAltText,
} from "../../constants/index";
import { removeJwtToken } from "../../utils/StorageUtils";

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
    LogoAndMenuMainContainer,
    LogoAndMenuContainer,
    MenuIconButton,
    MenuIcon,
} from "./styledComponents";

const Header = (props: RouterProps) => {
    const { isDesktopView } = useContext(ObjContext);

    const { t } = useTranslation();

    const { pathname } = props.history.location;

    const [isMenuOpened, setMenuStatus] = useState(false);

    const onClickCrossIcon = () => {
        setMenuStatus(false);
    };

    const onClickMenuIcon = () => {
        setMenuStatus(true);
    };

    const onClickLogout = () => {
        const { history } = props;
        removeJwtToken();
        history.replace("/login");
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
                <LogoutButton onClick={onClickLogout}>
                    {t("headerText.logout")}
                </LogoutButton>
            </LiElement>
        </HomeCartLogoutUl>
    );

    const renderDesktopView = () => (
        <WrapperComponent>
            <DesktopViewContainer>
                {renderLogoAndTitle()}
                {renderHomeCartLogoutButtons()}
            </DesktopViewContainer>
        </WrapperComponent>
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
            <LogoAndMenuMainContainer>
                <LogoAndMenuContainer>
                    {renderLogoAndTitle()}
                    <MenuIconButton type="button" onClick={onClickMenuIcon}>
                        <MenuIcon />
                    </MenuIconButton>
                </LogoAndMenuContainer>
            </LogoAndMenuMainContainer>
            {isMenuOpened && renderOptionsAndCrossIcon()}
        </MobileViewContainer>
    );

    return (
        <HeaderMainContainer>
            {isDesktopView ? renderDesktopView() : renderMobileView()}
        </HeaderMainContainer>
    );
};

export const HeaderWithRouter = withRouter(Header);
