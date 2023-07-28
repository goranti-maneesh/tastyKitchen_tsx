import { useTranslation } from "react-i18next";

import Header from "../../../Common/components/Header";
import { notFoundImage, notFoundAltText } from "../../../Common/constants";
import WrapperComponent from "../../../Common/components/WrapperComponent";

import {
    NotFoundMainContainer,
    NotFoundContainer,
    NotFoundImage,
    NotFoundHeading,
    NotFoundDescription,
    HomePageButton,
    LinkComponent,
} from "./styledComponents";

export const NotFound = () => {
    const { t } = useTranslation();

    return (
        <WrapperComponent>
            <NotFoundMainContainer>
                <NotFoundContainer>
                    <NotFoundImage src={notFoundImage} alt={notFoundAltText} />
                    <NotFoundHeading>{t("notFound.title")}</NotFoundHeading>
                    <NotFoundDescription>
                        {t("notFound.description")}
                    </NotFoundDescription>
                    <LinkComponent to="/">
                        <HomePageButton>
                            {t("notFound.buttonText")}
                        </HomePageButton>
                    </LinkComponent>
                </NotFoundContainer>
            </NotFoundMainContainer>
        </WrapperComponent>
    );
};
