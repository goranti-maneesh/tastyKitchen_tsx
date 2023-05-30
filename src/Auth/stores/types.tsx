export interface AuthSuccessResObjectTypes {
    jwt_token: string;
    responseStatus: boolean;
    error_msg?: string;
}

export interface AuthFailureResObjectTypes {
    error_msg: string;
    status_code: Number;
    responseStatus: boolean;
    jwt_token?: string;
}

export interface AuthReqObjectTypes {
    username: string;
    password: string;
}

export interface props {
    children?: React.ReactNode;
}

export interface inputLabelProps {
    regex: RegExp;
    labelText: string;
    id: string;
    placeholder: string;
    onChangeMethod: (event: React.FormEvent<HTMLInputElement>) => void;
    errorMsg: string;
    value: string;
    type: string;
}

export interface inputLabelPropsObjTypes {
    inputLabelPropsObj: inputLabelProps;
}

export interface loginPageProps {
    userNameProps: inputLabelProps;
    passwordProps: inputLabelProps;
    submitMethod: () => void;
    authErrorMessage: string;
    responseStatus: boolean;
    constraint: string;
}
