import { useState } from "react";

import { InputLabelPropsObjTypes } from "../../stores/types";

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
        regex,
        labelText,
        id,
        placeholder,
        onChangeMethod,
        errorMsg,
        value,
        type,
    } = InputLabelPropsObj;

    const [isErrorMsgDisplayed, setLoginErrorMsgStatus] = useState(false);

    const onBlurInputEle = (event: React.FormEvent<HTMLInputElement>): void => {
        if (regex.test(event.currentTarget.value)) {
            setLoginErrorMsgStatus(false);
        } else {
            setLoginErrorMsgStatus(true);
        }
    };

    const onFocusInputEle = (
        event: React.FormEvent<HTMLInputElement>
    ): void => {
        setLoginErrorMsgStatus(false);
    };

    return (
        <InputLabelCont>
            <LoginLabelEle htmlFor={id}>{labelText}</LoginLabelEle>
            <br />
            <LoginInputEle
                type={type}
                id={id}
                placeholder={placeholder}
                onChange={onChangeMethod}
                onBlur={onBlurInputEle}
                onFocus={onFocusInputEle}
                value={value}
            />
            {isErrorMsgDisplayed ? <ErrorMsg>{errorMsg}</ErrorMsg> : null}
        </InputLabelCont>
    );
};
