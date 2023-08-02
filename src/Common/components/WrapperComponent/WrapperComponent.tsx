import { ChildProps } from "../../stores/types";

import { WrapperComponentContainer } from "./styledComponents";

export const WrapperComponent = ({ children }: ChildProps) => {
    return <WrapperComponentContainer>{children}</WrapperComponentContainer>;
};
