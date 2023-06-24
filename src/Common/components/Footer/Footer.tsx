import { useTranslation } from "react-i18next";

import {
    footerTastyKitchensLogo,
    footerTastyKitchensLogoAltText,
} from "../../constants";

import {
    FooterContainer,
    FooterLogoContainer,
    FooterLogo,
    FooterTastyKitchensTitle,
    FooterDescriptionContainer,
    FooterDecription,
    SocialMediaIconsContainer,
    PinInterestIcon,
    InstagramIcon,
    TwitterIcon,
    FaceBookIcon,
} from "./styledComponents";

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <FooterContainer>
            <FooterLogoContainer>
                <FooterLogo
                    src={footerTastyKitchensLogo}
                    alt={footerTastyKitchensLogoAltText}
                />
                <FooterTastyKitchensTitle>{t("name")}</FooterTastyKitchensTitle>
            </FooterLogoContainer>
            <FooterDescriptionContainer>
                <FooterDecription>
                    {t("footerText.description")}
                </FooterDecription>
            </FooterDescriptionContainer>
            <SocialMediaIconsContainer>
                <PinInterestIcon fill="#0F172A" />
                <InstagramIcon fill="#ffffff" />
                <TwitterIcon fill="#ffffff" />
                <FaceBookIcon fill="#ffffff" />
            </SocialMediaIconsContainer>
        </FooterContainer>
    );
};
