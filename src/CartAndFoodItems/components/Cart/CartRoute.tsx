import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import Footer from "../../../Common/components/Footer";
import Header from "../../../Common/components/Header";
import WrapperComponent from "../../../Common/components/WrapperComponent";

import { useFoodItemsHook } from "../../hooks/useFoodItemsHooks";

import EachCartItem from "../EachCartItem";

import {
    CartRouteMainContainer,
    CartDetailsContainer,
    CartDetailsTitleContainer,
    CartItemTitle,
    CartListUlElement,
    HorizontalLine,
    TotalPriceSectionContainer,
    OrderTotal,
    TotalPriceContainer,
    PlaceOrderButton,
} from "./styledComponents";

export const CartRoute = observer(() => {
    const { t } = useTranslation();

    const foodItems = useFoodItemsHook();

    const {
        cartList,
        totalPrice,
        getCartListFromLS,
        incrementItemQuantity,
        decrementItemQuantity,
    } = foodItems;

    console.log(cartList, "totalPrice");

    useEffect(() => {
        getCartListFromLS();
    }, []);

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
                <PlaceOrderButton>
                    {t("cartText.placeOrderText")}
                </PlaceOrderButton>
            </TotalPriceContainer>
        </TotalPriceSectionContainer>
    );

    return (
        <CartRouteMainContainer>
            <Header />
            <WrapperComponent>
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
            </WrapperComponent>
            <Footer />
        </CartRouteMainContainer>
    );
});
