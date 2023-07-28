import { Link } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";

export const OrderSuccessMainContainer = styled.div`
    ${tw`flex justify-center items-center h-85vh`}
`;

export const OrderSuccessContainer = styled.div`
    ${tw`flex flex-col items-center`}
`;

export const OrderSuccessTickImage = styled.img`
    ${tw`w-80px h-80px`}

    @media(max-width: 768px) {
        ${tw`w-48px h-48px`}
    }
`;

export const OrderSuccessHeading = styled.h1`
    ${tw`text-Mirage text-fs24_lh32 font-medium mt-8 text-center`}

    @media(max-width: 768px) {
        ${tw`text-fs20_lh24 mt-6`}
    }
`;

export const OrderSuccessDescription = styled.p`
    ${tw`text-Slate_Gray text-fs16_lh24 font-medium mt-6 mb-8 text-center`}

    @media(max-width: 768px) {
        ${tw`text-fs14_lh24 mt-4`}
    }
`;

export const OrderSuccessButton = styled.button`
    ${tw`text-white text-fs12_lh16 bg-Tree_Poppy rounded-lg cursor-pointer outline-none pt-2 pr-4 pb-2 pl-4`}
`;

export const LinkComponent = styled(Link)``;
