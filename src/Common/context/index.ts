import {createContext} from 'react'

import { eachFoodItemTypes } from '../stores/types';

const isDesktopView: boolean = window.matchMedia("(max-width: 768px)").matches

export const ObjContext = createContext({
    isDesktopView,
    cartList: [] as Array<eachFoodItemTypes>,
    increaseCartItemQuantity: ({}: eachFoodItemTypes) => {},
    decreaseCartItemQuantity: (id: string) => {}
});