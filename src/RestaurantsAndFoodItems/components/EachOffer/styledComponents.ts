import styled from "styled-components";
import tw from "twin.macro";

export const EachOfferImg = styled.img`
    ${tw`h-319px`}

    @media((min-width:768px) and (max-width: 996px)) {
        ${tw`h-250px`}
    }

    @media (max-width: 768px) {
        ${tw`h-188px`}
    }
`;
