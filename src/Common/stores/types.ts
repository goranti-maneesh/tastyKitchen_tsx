export interface childProps {
    children: React.ReactNode 
}

export interface constraintsTypes{
    initial: string,
    loading: string,
    success: string,
    failure: string
}

export interface headerLinkComponentProps {
    $isSelected: boolean
}

export interface eachFoodItemTypes {
    name: string;
    cost: number;
    foodType: string;
    imageUrl: string;
    id: string;
    rating: number;
    quantity: number;
}

export interface contextTypes {
    isDesktopView: boolean,
    cartList: Array<eachFoodItemTypes>,
    increaseCartItemQuantity: ({}: eachFoodItemTypes) => void,
    decreaseCartItemQuantity: (id: string) => void
}