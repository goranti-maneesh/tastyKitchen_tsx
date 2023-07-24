import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

import { eachItemPropsTypes } from "../../stores/types";
import { useFoodItemsHook } from "../../hooks/useFoodItemsHooks";

import { RatingIcon } from "../FoodItems/styledComponents";

import {
    EachFoodItemContainer,
    FoodItemImage,
    FoodItemDetails,
    FoodItemName,
    FoodItemCost,
    FoodItemRating,
    FoodRating,
    AddButton,
    QuantityContainer,
    PlusMinusButton,
    Quantity,
} from "./styledComponents";

export const EachFoodItem = observer((props: eachItemPropsTypes) => {
    const { eachItem } = props;
    const { name, cost, foodType, imageUrl, id, quantity, rating } = eachItem;

    const foodItems = useFoodItemsHook();

    const { addItemToCart, incrementItemQuantity, decrementItemQuantity } =
        foodItems;

    const { t } = useTranslation();

    const increaseQuantity = () => {
        incrementItemQuantity(id);
    };

    const decreaseQuantity = () => {
        decrementItemQuantity(id);
    };

    const addItemToCartList = () => {
        addItemToCart(eachItem);
    };

    const renderQuantity = () => (
        <QuantityContainer>
            <PlusMinusButton type="button" onClick={decreaseQuantity}>
                -
            </PlusMinusButton>
            <Quantity>{quantity}</Quantity>
            <PlusMinusButton type="button" onClick={increaseQuantity}>
                +
            </PlusMinusButton>
        </QuantityContainer>
    );

    const renderAddButton = () => (
        <AddButton type="button" onClick={addItemToCartList}>
            {t("ADD")}
        </AddButton>
    );

    return (
        <EachFoodItemContainer>
            <FoodItemImage src={imageUrl} alt={name} />
            <FoodItemDetails>
                <FoodItemName>{name}</FoodItemName>
                <FoodItemCost>{`₹ ${cost}.00`}</FoodItemCost>
                <FoodItemRating>
                    <RatingIcon fill="#F7931E" />
                    <FoodRating>{rating}</FoodRating>
                </FoodItemRating>
                {quantity > 0 ? renderQuantity() : renderAddButton()}
            </FoodItemDetails>
        </EachFoodItemContainer>
    );
});
