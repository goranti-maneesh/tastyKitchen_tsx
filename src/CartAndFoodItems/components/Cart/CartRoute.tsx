import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useContext } from "react";

import { ObjContext } from "../../../Common/context";
import Footer from "../../../Common/components/Footer";
import Header from "../../../Common/components/Header";
import WrapperComponent from "../../../Common/components/WrapperComponent";
import { emptyCartImg, emptyCartImgAltText } from "../../../Common/constants";

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

    const renderEmptyCartView = () => {
        return (
            <EmptyCartContainer>
                <EmptyCartImage src={emptyCartImg} alt={emptyCartImgAltText} />
                <EmptyCartHeading>{t("noOrders.title")}</EmptyCartHeading>
                <EmptyCartDescription>
                    {t("noOrders.description")}
                </EmptyCartDescription>
                <OrderNowButton>{t("noOrders.buttonText")}</OrderNowButton>
            </EmptyCartContainer>
        );
    };

    const renderCart = () => {
        return (
            <CartContainer>
                <WrapperComponent>
                    <CartDetailsContainer>
                        <CartDetailsTitleContainer>
                            <CartItemTitle>{t("cartText.item")}</CartItemTitle>
                            <CartItemTitle>
                                {t("cartText.quantity")}
                            </CartItemTitle>
                            <CartItemTitle>{t("cartText.price")}</CartItemTitle>
                        </CartDetailsTitleContainer>
                        {renderEachCart()}
                        <HorizontalLine />
                        {renderTotalPriceSection()}
                    </CartDetailsContainer>
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
