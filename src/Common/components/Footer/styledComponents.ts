import styled from "styled-components";
import tw from "twin.macro";
import { FaPinterestP, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export const FooterContainer = styled.div`
    ${tw`bg-Ebony text-center h-424px flex flex-col justify-center`}
`;

export const FooterLogoContainer = styled.div`
    ${tw`flex justify-center items-center mb-6`}
`;

export const FooterLogo = styled.img`
    ${tw`w-48px h-38px mr-18px`}
`;

export const FooterTastyKitchensTitle = styled.h1`
    ${tw`text-white text-fs32_lh48 italic font-bold m-0`}
`;

export const FooterDescriptionContainer = styled.div`
    ${tw`text-center mb-12`}
`;

export const FooterDecription = styled.p`
    ${tw`text-fs24_lh32 text-white font-normal m-0 m-auto w-479px`}
`;

export const SocialMediaIconsContainer = styled.div`
    ${tw`text-center flex justify-center`}
`;

export const PinInterestIcon = styled(FaPinterestP)`
    ${tw`w-40px h-40px ml-40px p-1 rounded-lg bg-white`}
`;

export const InstagramIcon = styled(BsInstagram)`
    ${tw`w-40px h-40px ml-40px`}
`;

export const TwitterIcon = styled(FaTwitter)`
    ${tw`w-40px h-40px ml-40px`}
`;

export const FaceBookIcon = styled(FaFacebookSquare)`
    ${tw`w-40px h-40px ml-40px`}
`;
