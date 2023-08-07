import styled from "styled-components";
import tw from "twin.macro";

export const FailureViewContainer = styled.div`
    ${tw`flex justify-center flex-col items-center`}
`;

export const FailureText = styled.h1`
    ${tw`font-bold text-fs24_lh32 mb-4`}
`;

export const RetryButton = styled.button`
    ${tw`pl-4 pr-4 pt-2 pb-2 flex justify-center items-center rounded-lg text-white bg-tree_poppy text-fs12_lh16 cursor-pointer outline-none font-bold w-73px h-8`}
`;
