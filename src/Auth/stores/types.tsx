export interface AuthSuccessResObjectTypes {
    jwtToken: string,
    responseStatus: boolean,
    error_msg?: string,
}

export interface AuthFailureResObjectTypes{
    error_msg: string,
    status_code: Number,
    responseStatus: boolean,
    jwtToken?: string,
}

export interface AuthReqObjectTypes{
    username: string,
    password: string
}

export interface props {
    children?: React.ReactNode 
}