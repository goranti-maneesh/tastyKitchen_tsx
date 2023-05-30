import { useState } from "react";

import { inputLabelPropsObjTypes } from "../../stores/types";

import {
    InputLabelCont,
    LoginLabelEle,
    LoginInputEle,
    ErrorMsg,
} from "./styledComponents";

export const InputLabelContainer = (props: inputLabelPropsObjTypes): JSX.Element => {
    const { inputLabelPropsObj } = props;

    const {
        regex,
        labelText,
        id,
        placeholder,
        onChangeMethod,
        errorMsg,
        value,
        type,
    } = inputLabelPropsObj;

    const [isErrorMsgDisplayed, setErrorMsgStatus] = useState(false);

    const onBlurInputEle = (event: React.FormEvent<HTMLInputElement>): void => {
        if (regex.test(event.currentTarget.value)) {
            setErrorMsgStatus(false);
        } else {
            setErrorMsgStatus(true);
        }
    };

    const onFocusInputEle = (
        event: React.FormEvent<HTMLInputElement>
    ): void => {
        setErrorMsgStatus(false);
    };

    return (
        <InputLabelCont>
            <LoginLabelEle htmlFor={id}>{labelText}</LoginLabelEle>
            <br/>
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
