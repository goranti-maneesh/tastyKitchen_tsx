import styled from "styled-components";
import tw from "twin.macro";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export const PaginationContainer = styled.div`
    ${tw`flex justify-center items-center mt-8 mb-16`}
`;

export const PaginationButton = styled.button`
    ${tw`w-8 h-8 p-2 border border-solid border-pickled_bluewood`}
`;

export const LeftArrowIcon = styled(FiChevronLeft)`
    ${tw`w-4 h-4`}
`;

export const RightArrowIcon = styled(FiChevronRight)`
    ${tw`w-4 h-4`}
`;

export const PageNumbers = styled.p`
    ${tw`text-pickled_bluewood font-serif ml-3 mr-3 font-bold`}
`;
