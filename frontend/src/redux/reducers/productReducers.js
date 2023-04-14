import * as actionTypes from "../constants/productConstants";

/**
 * This is a reducer function that handles actions related to getting products, including setting
 * loading state, updating the products array, and handling errors.
 * @param [state] - The current state of the getProductsReducer. If no state is provided, it will
 * default to an object with an empty array for the products property.
 * @param action - The `action` parameter in this code refers to an object that describes the action
 * being performed. It typically has a `type` property that indicates the type of action being
 * performed, and may also have additional data or payload that is relevant to the action. The `switch`
 * statement in this code checks
 * @returns The `getProductsReducer` function returns an object with a `products` property and either a
 * `loading` property or an `error` property depending on the action type. If the action type is
 * `GET_PRODUCTS_REQUEST`, the `loading` property is set to `true` and the `products` property is set
 * to an empty array. If the action type is `GET_PRODUCTS_SUCCESS`, the
 */
export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        products: action.payload,
        loading: false,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

/**
 * This is a reducer function that handles actions related to getting product details, including
 * loading, success, failure, and resetting the product state.
 * @param [state] - The current state of the reducer. If no state is provided, the default state is an
 * object with an empty "product" property.
 * @param action - `action` is an object that contains information about the action being dispatched.
 * It typically has a `type` property that describes the type of action being performed, and may also
 * have additional data in a `payload` property. The reducer uses this information to determine how to
 * update the state.
 * @returns This is a reducer function that returns an object with different properties based on the
 * action type received. If the action type is GET_PRODUCT_DETAILS_REQUEST, it returns an object with a
 * loading property set to true. If the action type is GET_PRODUCT_DETAILS_SUCCESS, it returns an
 * object with a loading property set to false and a product property set to the action payload. If the
 * action type is GET_PRODUCT_DETAILS
 */
export const getProductDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_PRODUCT_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
