import { createContext, useContext } from "react";

import { FoodItemStore } from "../stores/FoodItemsStore/FoodItemsStore";

import { FoodItemsService } from "../../Common/stores";
import { childProps } from "../../Common/stores/types";

const foodItemServiceInstance = new FoodItemsService();

const foodItemStoreInstance = new FoodItemStore(foodItemServiceInstance);

const FoodItemsContext = createContext(foodItemStoreInstance);

export const FoodItemsHook = ({ children }: childProps) => (
    <FoodItemsContext.Provider value={foodItemStoreInstance}>
        {children}
    </FoodItemsContext.Provider>
)

export const useFoodItemsHook = () => useContext(FoodItemsContext)