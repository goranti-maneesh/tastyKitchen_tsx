import styled from "styled-components";
import tw from "twin.macro";

export const InputLabelCont = styled.div`
    ${tw`mb-6 w-360px`}

    @media(max-width: 768px) {
        ${tw`w-312px`}
    }
`;

export const LoginLabelEle = styled.label`
    ${tw`text-Fiord mb-2 text-fs12_lh16`}
`;

export const LoginInputEle = styled.input`
    ${tw`w-360px h-40px p-2 pl-4 pr-4 bg-Catskill_White rounded-sm text-Big_Stone outline-none text-fs14_lh24`}

    @media(max-width: 768px) {
        ${tw`w-312px`}
    }
`;

export const ErrorMsg = styled.p`
    ${tw`text-Flamingo text-fs14_lh18 font-normal mt-3 mb-2`}
`;
