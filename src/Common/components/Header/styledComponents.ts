import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

import { HeaderLinkComponentProps } from "../../stores/types";

export const HeaderMainContainer = styled.div`
    ${tw`bg-catskill_white relative`}

    @media(max-width: 768px) {
        ${tw`bg-white`}
    }
`;

export const LogoTitleContainer = styled.div`
    ${tw`flex items-center h-96px`}

    @media(max-width: 768px) {
        ${tw`h-64px `}
    }
`;

export const TastyKitchensLogo = styled.img`
    ${tw`w-49px h-39px`}

    @media(max-width: 768px) {
        ${tw`w-39px h-32px`}
    }
`;

export const TastyKitchensTitle = styled.h1`
    ${tw`text-fs24_lh32 m-0 text-tree_poppy font-bold italic ml-18px`}

    @media(max-width: 768px) {
        ${tw`text-fs16_lh24 ml-2    `}
    }
`;

export const DesktopViewContainer = styled.div`
    ${tw`flex justify-between`}
`;

export const HomeCartLogoutUl = styled.ul`
    ${tw`flex items-center`}
`;

export const LiElement = styled.li`
    ${tw``}
`;

export const LinkComponent = styled(Link)<HeaderLinkComponentProps>`
    ${tw`text-pickled_bluewood text-fs16_lh26 font-bold mr-8`}

    ${(props) => props.$isSelected && tw`text-tree_poppy`}

    @media(max-width: 768px) {
        ${tw`mr-6 font-medium`}
    }
`;

export const LogoutButton = styled.button`
    ${tw`pl-4 pr-4 pt-2 pb-2 flex justify-center items-center rounded-lg text-white bg-tree_poppy text-fs12_lh16 cursor-pointer outline-none font-bold w-73px h-8`}
`;

export const OptionsAndCrossIconContainer = styled.div`
    ${tw`max-w-1110px w-89vw m-auto flex justify-between h-96px pt-4`}
`;

export const CrossIconButton = styled.button``;

export const CrossIcon = styled(MdCancel)``;

export const MobileViewContainer = styled.div``;

export const LogoAndMenuMainContainer = styled.div`
    ${tw`bg-catskill_white`}
`;

export const LogoAndMenuContainer = styled.div`
    ${tw`max-w-1110px w-89vw m-auto flex justify-between`}
`;

export const MenuIconButton = styled.button``;

export const MenuIcon = styled(HiMenu)``;
