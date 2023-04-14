import * as actionTypes from "../constants/cartConstants";

/* `const CART_INITIAL_STATE` is initializing the initial state of the cart reducer. It sets the
`cartItems` property to an empty array, indicating that the cart is initially empty. This initial
state is used as the default value for the `state` parameter in the `cartReducer` function. */
const CART_INITIAL_STATE = {
  cartItems: [],
};

/**
 * This is a reducer function that handles adding and removing items from a shopping cart in a
 * React/Redux application.
 * @param [state] - The current state of the cart, which is an object containing an array of cart items
 * and the total price.
 * @param action - The `action` parameter is an object that contains information about the action being
 * dispatched. It has a `type` property that indicates the type of action being performed, and a
 * `payload` property that contains any additional data needed to perform the action. The `action`
 * parameter is passed to the `
 * @returns The `cartReducer` function returns a new state object based on the action type and payload
 * received. If the action type is `ADD_TO_CART`, it checks if the item already exists in the cart. If
 * it does, it updates the quantity of the existing item. If it doesn't, it adds the new item to the
 * cart. If the action type is `REMOVE_FROM_CART`, it removes
 */
export const cartReducer = (state = CART_INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    default:
      return state;
  }
};
