import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useContext } from "react";

import { ObjContext } from "../../../Common/context";
import Footer from "../../../Common/components/Footer";
import Header from "../../../Common/components/Header";
import WrapperComponent from "../../../Common/components/WrapperComponent";
import { emptyCartImg, emptyCartImgAltText, homeRoute, orderSuccessRoute } from "../../../Common/constants";

import { useFoodItemsHook } from "../../hooks/useFoodItemsHooks";

import EachCartItem from "../EachCartItem";

import {
    CartRouteMainContainer,
    CartContainer,
    CartDetailsContainer,
    CartDetailsTitleContainer,
    CartItemTitle,
    CartListUlElement,
    HorizontalLine,
    TotalPriceSectionContainer,
    OrderTotal,
    TotalPriceContainer,
    PlaceOrderButton,
    EmptyCartContainer,
    EmptyCartImage,
    EmptyCartHeading,
    EmptyCartDescription,
    OrderNowButton,
    CartDetailsContainerMobileView,
    OrderNowLinkComponent,
} from "./styledComponents";

export const CartRoute = observer(() => {
    const { t } = useTranslation();

    const foodItems = useFoodItemsHook();

    const { isDesktopView } = useContext(ObjContext);

    const {
        cartList,
        totalPrice,
        getCartListFromLS,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItemsFromCart,
    } = foodItems;

    useEffect(() => {
        getCartListFromLS();
    }, []);

    const clearCartList = () => {
        removeItemsFromCart();
    };

    const renderEachCart = () => (
        <CartListUlElement>
            {cartList.map((eachItem) => (
                <EachCartItem
                    key={eachItem.id}
                    eachItem={eachItem}
                    incrementItemQuantity={incrementItemQuantity}
                    decrementItemQuantity={decrementItemQuantity}
                />
            ))}
        </CartListUlElement>
    );

    const renderTotalPriceSection = () => (
        <TotalPriceSectionContainer>
            <OrderTotal>{t("cartText.orderTotalText")} :</OrderTotal>
            <TotalPriceContainer>
                <OrderTotal>{`₹ ${totalPrice}.00`}</OrderTotal>
                <OrderNowLinkComponent to={orderSuccessRoute}>
                    <PlaceOrderButton onClick={clearCartList}>
                        {t("cartText.placeOrderText")}
                    </PlaceOrderButton>
                </OrderNowLinkComponent>
            </TotalPriceContainer>
        </TotalPriceSectionContainer>
    );

    const renderEmptyCartView = () => {
        return (
            <EmptyCartContainer>
                <EmptyCartImage src={emptyCartImg} alt={emptyCartImgAltText} />
                <EmptyCartHeading>{t("noOrders.title")}</EmptyCartHeading>
                <EmptyCartDescription>
                    {t("noOrders.description")}
                </EmptyCartDescription>
                <OrderNowLinkComponent to={homeRoute}>
                    <OrderNowButton>{t("noOrders.buttonText")}</OrderNowButton>
                </OrderNowLinkComponent>
            </EmptyCartContainer>
        );
    };

    const renderCartInMobileView = () => (
        <CartDetailsContainerMobileView>
            {renderEachCart()}
            <HorizontalLine />
            {renderTotalPriceSection()}
        </CartDetailsContainerMobileView>
    );

    const renderCartInDesktopView = () => (
        <CartDetailsContainer>
            <CartDetailsTitleContainer>
                <CartItemTitle>{t("cartText.item")}</CartItemTitle>
                <CartItemTitle>{t("cartText.quantity")}</CartItemTitle>
                <CartItemTitle>{t("cartText.price")}</CartItemTitle>
            </CartDetailsTitleContainer>
            {renderEachCart()}
            <HorizontalLine />
            {renderTotalPriceSection()}
        </CartDetailsContainer>
    );

    const renderCart = () => {
        return (
            <CartContainer>
                <WrapperComponent>
                    {isDesktopView
                        ? renderCartInDesktopView()
                        : renderCartInMobileView()}
                </WrapperComponent>
                <Footer />
            </CartContainer>
        );
    };

    return (
        <CartRouteMainContainer>
            <Header />
            {cartList.length === 0 ? renderEmptyCartView() : renderCart()}
        </CartRouteMainContainer>
    );
});
