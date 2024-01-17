import { useState } from "react";

import { InputLabelPropsObjTypes } from "../../../Auth/stores/Types/loginTypes";

import {
    InputLabelCont,
    LoginLabelEle,
    LoginInputEle,
    ErrorMsg,
} from "./styledComponents";

export const InputLabelContainer = (
    props: InputLabelPropsObjTypes
): JSX.Element => {
    const { InputLabelPropsObj } = props;

    const {
        labelText,
        id,
        placeholder,
        onChangeMethod,
        value,
        type,
    } = InputLabelPropsObj;

    const [isErrorMsgDisplayed, setLoginErrorMsgStatus] = useState(false);

    return (
        <InputLabelCont>
            <LoginLabelEle htmlFor={id}>{labelText}</LoginLabelEle>
            <br />
            <LoginInputEle
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChangeMethod}
                value={value}
            />
        </InputLabelCont>
    );
};
