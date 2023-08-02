import { useTranslation } from "react-i18next";

import Header from "../../../Common/components/Header";
import { greenTickImage, greenTickAltText, homeRoute } from "../../../Common/constants";
import WrapperComponent from "../../../Common/components/WrapperComponent";

import {
    OrderSuccessMainContainer,
    OrderSuccessContainer,
    OrderSuccessTickImage,
    OrderSuccessHeading,
    OrderSuccessDescription,
    OrderSuccessButton,
    LinkComponent,
} from "./styledComponents";

export const OrderSuccess = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <WrapperComponent>
                <OrderSuccessMainContainer>
                    <OrderSuccessContainer>
                        <OrderSuccessTickImage
                            src={greenTickImage}
                            alt={greenTickAltText}
                        />
                        <OrderSuccessHeading>
                            {t("paymentSuccess.title")}
                        </OrderSuccessHeading>
                        <OrderSuccessDescription>
                            {t("paymentSuccess.description")}
                        </OrderSuccessDescription>
                        <LinkComponent to={homeRoute}>
                            <OrderSuccessButton>
                                {t("paymentSuccess.buttonText")}
                            </OrderSuccessButton>
                        </LinkComponent>
                    </OrderSuccessContainer>
                </OrderSuccessMainContainer>
            </WrapperComponent>
        </>
    );
};
