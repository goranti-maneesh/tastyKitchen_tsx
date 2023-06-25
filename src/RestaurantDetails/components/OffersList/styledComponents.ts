import styled from "styled-components";
import tw from "twin.macro";

export const OffersUlElement = styled.ul`
    ${tw`bg-white`}

    @media((min-width:576px) and (max-width: 768px)) {
        ${tw`w-89vw m-auto`}
    }
`;

export const OffersContainer = styled.div`
    ${tw`h-369px pt-49px`}

    @media((min-width:768px) and (max-width: 996px)) {
        ${tw`h-299px`}
    }

    @media (max-width: 768px) {
        ${tw`p-0 h-188px`}
    }
`;
