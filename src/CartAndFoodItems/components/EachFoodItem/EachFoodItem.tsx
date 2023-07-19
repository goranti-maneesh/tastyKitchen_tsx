import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { observer } from "mobx-react-lite";

import { eachItemPropsTypes } from "../../stores/types";
import { useFoodItemsHook } from "../../hooks/useFoodItemsHooks";

import { RatingIcon } from "../FoodItems/styledComponents";

import { ObjContext } from "../../../Common/context";

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
    const {
        name,
        cost,
        foodType,
        imageUrl,
        id,
        quantity,
        rating,
    } = eachItem;

    const {increaseCartItemQuantity, decreaseCartItemQuantity} = useContext(ObjContext);

    const foodItems = useFoodItemsHook();

    // const { increaseFoodQuantity } = foodItems;

    // console.log(quantity, "quantity");

    const { t } = useTranslation();

    const increaseQuantity = () => {
        increaseCartItemQuantity(eachItem)
    };

    const decreaseQuantity = () => {
        decreaseCartItemQuantity(id)
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
        <AddButton type="button" onClick={increaseQuantity}>
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
