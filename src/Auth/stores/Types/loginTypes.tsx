export interface AuthSuccessResObjectTypes {
    jwt_token: string;
    responseStatus: boolean;
}

export interface AuthFailureResObjectTypes {
    error_msg: string;
    status_code: Number;
    responseStatus: boolean;
}

export interface AuthReqObjectTypes {
    username: string;
    password: string;
}

export interface InputLabelProps {
    labelText: string;
    id: string;
    placeholder: string;
    onChangeMethod: (event: React.FormEvent<HTMLInputElement>) => void;
    value: string;
    type: string;
}

export interface InputLabelPropsObjTypes {
    InputLabelPropsObj: InputLabelProps;
}

export interface LoginPageProps {
    userNameProps: InputLabelProps;
    passwordProps: InputLabelProps;
    submitMethod: () => void;
    authErrorMessage: string;
    responseStatus: boolean;
    constraint: string;
}
