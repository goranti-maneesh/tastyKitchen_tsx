import { ConstraintsTypes } from "../stores/types";

export const constraints: ConstraintsTypes = {
    initial: "INITIAL",
    loading: "LOADING",
    success: "SUCCESS",
    failure: "FAILURE",
};

export const token = "jwt_token";

export const homeRoute = "/";

export const loginRoute = "/login";

export const registerRoute = "/register"

export const restaurantsRoute = "/restaurants";

export const cartRoute = "/cart";

export const orderSuccessRoute = "/order-success";

export const notFoundRoute = "/not-found";

export const alreadyHaveAccText = "Already have an account?";

export const newToTastyKitchenText = "New to Tasty Kitchen?";

export const tastyKitchensLogo =
    "https://res.cloudinary.com/degjdup40/image/upload/v1685290528/Frame_274_v4arhl.png";

export const tastyKitchensLogoAltText = "tasty-kitchen-logo";

export const restaurantImgAltText = "restaurant-img";

export const jwtTokenValue = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU"

export const ratingImg =
    "https://res.cloudinary.com/degjdup40/image/upload/v1687134786/7_Rating_dqnghk.jpg";

export const ratingImgAltText = "rating";

export const footerTastyKitchensLogo =
    "https://res.cloudinary.com/degjdup40/image/upload/v1687306154/Group_7420_mexg7j.png";

export const footerTastyKitchensLogoAltText = "footer-tasty-kitchen-logo";

export const emptyCartImg =
    "https://res.cloudinary.com/degjdup40/image/upload/v1690308995/cooking_1_npwhzj.png";

export const emptyCartImgAltText = "empty-cart-image";

export const greenTickImage =
    "https://res.cloudinary.com/degjdup40/image/upload/v1690482269/check-circle.1_1_usnd2d.png";

export const greenTickAltText = "green-tick-image";

export const notFoundImage =
    "https://res.cloudinary.com/degjdup40/image/upload/v1690506211/erroring_1_w8u3bm.png";

export const notFoundAltText = "not-found-image";
