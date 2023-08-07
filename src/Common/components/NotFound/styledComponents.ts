import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

export const NotFoundMainContainer = styled.div`
    ${tw`flex justify-center items-center h-100vh`}
`;

export const NotFoundContainer = styled.div`
    ${tw`flex flex-col items-center`}
`;

export const NotFoundImage = styled.img`
    ${tw`w-269px h-297px`}

    @media(max-width: 768px) {
        ${tw`w-140px h-155px`}
    }
`;

export const NotFoundHeading = styled.h1`
    ${tw`text-mirage text-fs32_lh48 font-medium mt-12 text-center`}

    @media(max-width: 768px) {
        ${tw`text-fs20_lh32 mt-6`}
    }
`;

export const NotFoundDescription = styled.p`
    ${tw`text-slate_gray text-fs20_lh32 font-medium mt-4 mb-8 text-center`}

    @media(max-width: 768px) {
        ${tw`text-fs16_lh24 mt-3`}
    }
`;

export const HomePageButton = styled.button`
    ${tw`text-white text-fs12_lh16 bg-tree_poppy rounded-lg cursor-pointer outline-none pt-3 pr-6 pb-3 pl-6`}

    @media(max-width: 768px) {
        ${tw`pt-2 pr-4 pb-2 pl-4`}
    }
`;

export const LinkComponent = styled(Link)``;
