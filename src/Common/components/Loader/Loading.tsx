import Loader from "react-loader-spinner";

import { LoaderContainer } from "./styledComponents";

export const Loading = () => (
    <LoaderContainer>
        <Loader type={"TailSpin"} width={53} height={53} color="#F7931E" />
    </LoaderContainer>
);
