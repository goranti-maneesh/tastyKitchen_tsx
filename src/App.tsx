import { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { AuthHooks } from "./Auth/hooks/useAuthStore";
import { OffersListHook } from "./RestaurantDetails/hooks/useOffersListHooks";
import { RestaurantsListHook } from "./RestaurantDetails/hooks/useRestaurantsListHooks";
import { FoodItemsHook } from "./CartAndFoodItems/hooks/useFoodItemsHooks";
import { ObjContext } from "./Common/context";
import LoginRoute from "./Auth/routes";
import HomeRoute from "./RestaurantDetails/routes";
import RestaurantItemsRoute from "./CartAndFoodItems/routes";
import { eachFoodItemTypes, contextTypes } from "./Common/stores/types";

const mediaQuery = window.matchMedia("(min-width: 768px)");

const App = (): JSX.Element => {
    const [isDesktopView, setScreenSize] = useState(
        mediaQuery.matches as boolean
    );

    const [cartList, setCartList] = useState([] as Array<eachFoodItemTypes>);

    useEffect(() => {
        const changeScreenSize = (event: MediaQueryListEvent) => {
            setScreenSize(event.matches);
        };

        mediaQuery.onchange = (event) => changeScreenSize(event);

        const cartListLSData = localStorage.getItem("cartList");
        if (cartListLSData !== null) {
            const parsedCartList = JSON.parse(cartListLSData);
            setCartList(parsedCartList);
        } else {
            setCartList([]);
        }

        return () => {
            console.log(cartList, "cartList", 3);
            // componentUnMount();
        };
    }, []);

    const componentUnMount = () => {
        console.log(cartList, "cartList", 2);
        localStorage.setItem("cartList", JSON.stringify(cartList));
    };

    useEffect(() => {
        return () => {
            console.log(cartList, "cartList", 1);
        };
    }, []);

    const increaseCartItemQuantity = (cartItem: eachFoodItemTypes) => {
        const selectedItem = cartList.find(
            (eachItem) => eachItem.id === cartItem.id
        );
        console.log(cartItem, selectedItem, "cartItem");

        if (selectedItem) {
            const updateCartList = cartList.map((eachItem) => {
                if (eachItem.id === cartItem.id) {
                    return {
                        ...eachItem,
                        quantity: eachItem.quantity + 1,
                    };
                }
                return eachItem;
            });
            setCartList(updateCartList);
        } else {
            const updateCartItem = {
                ...cartItem,
                quantity: cartItem.quantity + 1,
            };

            console.log([...cartList, updateCartItem]);

            setCartList([...cartList, updateCartItem]);
        }
    };

    const decreaseCartItemQuantity = (id: string) => {
        const updateCartList = cartList.map((eachItem) => {
            if (eachItem.id === id) {
                return {
                    ...eachItem,
                    quantity: eachItem.quantity - 1,
                };
            }
            return eachItem;
        });
        setCartList(updateCartList);
    };

    return (
        <ObjContext.Provider
            value={{
                isDesktopView: isDesktopView,
                cartList,
                increaseCartItemQuantity: increaseCartItemQuantity,
                decreaseCartItemQuantity: decreaseCartItemQuantity,
            }}
        >
            <BrowserRouter>
                <AuthHooks>
                    <OffersListHook>
                        <RestaurantsListHook>
                            <FoodItemsHook>
                                <Switch>
                                    <Route
                                        exact
                                        path="/login"
                                        component={LoginRoute}
                                    />
                                    <Route
                                        exact
                                        path="/"
                                        component={HomeRoute}
                                    />
                                    <Route
                                        exact
                                        path="/restaurants/:id"
                                        component={RestaurantItemsRoute}
                                    />
                                </Switch>
                            </FoodItemsHook>
                        </RestaurantsListHook>
                    </OffersListHook>
                </AuthHooks>
            </BrowserRouter>
        </ObjContext.Provider>
    );
};

export default App;
