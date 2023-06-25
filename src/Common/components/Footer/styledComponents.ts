import styled from "styled-components";
import tw from "twin.macro";
import { FaPinterestP, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export const FooterContainer = styled.div`
    ${tw`bg-Ebony text-center h-424px flex flex-col justify-center`}

    @media(max-width: 768px) {
        ${tw`h-256px`}
    }
`;

export const FooterLogoContainer = styled.div`
    ${tw`flex justify-center items-center mb-6`}

    @media(max-width: 768px) {
        ${tw`mb-7`}
    }
`;

export const FooterLogo = styled.img`
    ${tw`w-48px h-38px mr-18px`}

    @media(max-width: 768px) {
        ${tw`w-40px h-32px mr-3`}
    }
`;

export const FooterTastyKitchensTitle = styled.h1`
    ${tw`text-white text-fs32_lh48 italic font-bold m-0`}

    @media(max-width: 768px) {
        ${tw`text-fs20_lh24`}
    }
`;

export const FooterDescriptionContainer = styled.div`
    ${tw`text-center mb-12`}

    @media(max-width: 768px) {
        ${tw`mb-8`}
    }
`;

export const FooterDecription = styled.p`
    ${tw`text-fs24_lh32 text-white font-normal m-0 m-auto w-479px`}

    @media(max-width: 768px) {
        ${tw`text-fs14_lh24 w-280px`}
    }
`;

export const SocialMediaContainer = styled.div`
    ${tw`flex justify-center`}
`;

export const SocialMediaIconsContainer = styled.div`
    ${tw`w-280px flex justify-between`}

    @media(max-width: 768px) {
        ${tw`w-168px`}
    }
`;

export const PinInterestIcon = styled(FaPinterestP)`
    ${tw`w-40px h-40px p-1 rounded-lg bg-white`}

    @media(max-width: 768px) {
        ${tw`w-24px h-24px`}
    }
`;

export const InstagramIcon = styled(BsInstagram)`
    ${tw`w-40px h-40px`}

    @media(max-width: 768px) {
        ${tw`w-24px h-24px`}
    }
`;

export const TwitterIcon = styled(FaTwitter)`
    ${tw`w-40px h-40px`}

    @media(max-width: 768px) {
        ${tw`w-24px h-24px`}
    }
`;

export const FaceBookIcon = styled(FaFacebookSquare)`
    ${tw`w-40px h-40px`}

    @media(max-width: 768px) {
        ${tw`w-24px h-24px`}
    }
`;
