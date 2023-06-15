import { useTranslation } from "react-i18next";

import {FailureViewContainer, FailureText, RetryButton} from './styledComponents'

export const Failure = () => {
    const { t } = useTranslation();

    return (
        <FailureViewContainer>
            <FailureText>{t("failureText.headingText")}</FailureText>
            <RetryButton type="button">{t("failureText.retryButton")}</RetryButton>
        </FailureViewContainer>
    );
};
