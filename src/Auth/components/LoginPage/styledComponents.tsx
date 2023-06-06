import styled from "styled-components";
import tw from "twin.macro";

export const LoginPageContainer = styled.div`
    ${tw`flex w-full h-full`}

    @media(max-width: 768px) {
        ${tw`flex-col w-360px m-auto`}
    }
`;

export const FormSection = styled.div`
    ${tw`w-1/2 h-screen flex justify-center items-center`}
`;

export const FormCard = styled.div`
    ${tw`flex flex-col items-center w-456px min-h-[523px] max-h-full shadow-loginFormCard p-12`}
`;

export const LogoImg = styled.img`
    ${tw`w-53px h-43px`}
`;

export const Title = styled.h1`
    ${tw`text-fs24_lh32 m-0 text-Tree_Poppy font-bold italic`}
`;

export const LoginHeading = styled.h1`
    ${tw`font-medium text-fs32_lh40 mt-8 mb-16`}

    @media(max-width:768px) {
        ${tw`text-fs24_lh32 m-0 ml-6 self-end`}
    }
`;

export const FormEle = styled.form`
    @media (max-width: 768px) {
        ${tw`p-6 pb-12 flex flex-col items-center`}
    }
`;

export const LoginButton = styled.button`
    ${tw`rounded-lg text-white bg-Tree_Poppy text-fs14_lh24 cursor-pointer outline-none font-bold w-360px h-40px`}

    @media(max-width: 768px) {
        ${tw`w-312px`}
    }
`;

export const LoginError = styled.p`
    ${tw`text-Flamingo text-fs14_lh18 font-normal mt-3 mb-2`}

    @media (max-width: 768px) {
        ${tw`text-fs12_lh16`}
    }
`;

export const BgImgContainer = styled.div`
    ${tw`w-50vw h-screen bg-loginDesktopBgImg bg-cover flex`}

    @media (max-width: 768px) {
        ${tw`bg-loginMobileBgImg w-387px h-387px `}
    }
`;

export const LoginPageImg = styled.img`
    ${tw`w-full h-full`}
`;

export const LoginPageTopSection = styled.div`
    ${tw`flex`}
`;

export const LoginButtonContainer = styled.div``;
