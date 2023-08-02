import { useContext } from "react";

import { ObjContext } from "../../../Common/context";

import { CartItemsPropsTypes } from "../../stores/types";

import {
    CartItemLiElement,
    CartItemContainer,
    ImageTitleContainer,
    CartItemImage,
    CartItemName,
    QuantityContainer,
    CartItemPrice,
    PlusMinusButton,
    Quantity,
} from "./styledComponents";

export const EachCartRoute = (props: CartItemsPropsTypes) => {
    const { isDesktopView } = useContext(ObjContext);

    const { eachItem, incrementItemQuantity, decrementItemQuantity } = props;

    const { imageUrl, name, price, quantity, id } = eachItem;

    const increaseQuantity = () => {
        incrementItemQuantity(id);
    };

    const decreaseQuantity = () => {
        decrementItemQuantity(id);
    };

    return (
        <CartItemLiElement>
            {!isDesktopView && <CartItemImage src={imageUrl} alt={name} />}
            <CartItemContainer>
                <ImageTitleContainer>
                    {isDesktopView && (
                        <CartItemImage src={imageUrl} alt={name} />
                    )}
                    <CartItemName>{name}</CartItemName>
                </ImageTitleContainer>
                <QuantityContainer>
                    <PlusMinusButton type="button" onClick={decreaseQuantity}>
                        -
                    </PlusMinusButton>
                    <Quantity>{quantity}</Quantity>
                    <PlusMinusButton type="button" onClick={increaseQuantity}>
                        +
                    </PlusMinusButton>
                </QuantityContainer>
                <CartItemPrice>{`₹ ${price}.00`}</CartItemPrice>
            </CartItemContainer>
        </CartItemLiElement>
    );
};
