import { createContext, useContext } from "react";

import { FoodItemsService } from "../../Common/stores";
import { ChildProps } from "../../Common/stores/types";

import { FoodItemStore } from "../stores/FoodItemsStore/FoodItemsStore";

const foodItemServiceInstance = new FoodItemsService();

const foodItemStoreInstance = new FoodItemStore(foodItemServiceInstance);

const FoodItemsContext = createContext(foodItemStoreInstance);

export const FoodItemsHook = ({ children }: ChildProps) => (
    <FoodItemsContext.Provider value={foodItemStoreInstance}>
        {children}
    </FoodItemsContext.Provider>
);

export const useFoodItemsHook = () => useContext(FoodItemsContext);
