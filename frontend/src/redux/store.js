import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
/* These lines of code are importing the cartReducer, getProductsReducer, and getProductDetailsReducer
functions from their respective files located in the "./reducers" directory. These functions are
then combined using the combineReducers function from the redux library to create a single reducer
function that can be used by the store. */
import { cartReducer } from "./reducers/cartReducers";
import {
  getProductsReducer,
  getProductDetailsReducer,
} from "./reducers/productReducers";

/* This code is combining three different reducer functions (`cartReducer`, `getProductsReducer`, and
`getProductDetailsReducer`) into a single reducer function using the `combineReducers` function from
the Redux library. The resulting reducer function will have three different pieces of state: `cart`,
`getProducts`, and `getProductDetails`. Each piece of state will be managed by its corresponding
reducer function. This combined reducer function can then be used to create a Redux store using the
`createStore` function. */
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

/* `const middleware = [thunk];` is creating an array called `middleware` that contains a single
middleware function called `thunk`. Middleware functions are functions that can intercept and modify
actions before they reach the reducer. In this case, `thunk` is a middleware that allows for
asynchronous actions to be dispatched in Redux. It enables actions to return functions instead of
plain objects, which can be useful for making API calls or performing other asynchronous tasks. The
`applyMiddleware` function from the Redux library is used to apply the middleware to the store. */
const middleware = [thunk];

/* This code is checking if there is an item with the key "cart" in the browser's local storage. If
there is, it retrieves the value of that item and parses it from a JSON string into a JavaScript
object using `JSON.parse()`. If there is no item with the key "cart" in local storage, it sets
`cartItemsInLocalStorage` to an empty array. This code is used to initialize the `cart` piece of
state in the Redux store with any items that were previously saved in local storage. */
const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

/* `const INITIAL_STATE` is creating an initial state object for the Redux store. The `cart` property
of the initial state object is an object that contains a `cartItems` property. The value of
`cartItems` is set to the value of `cartItemsInLocalStorage`, which is an array of items that were
previously saved in local storage. This code is used to initialize the `cart` piece of state in the
Redux store with any items that were previously saved in local storage. */
const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

/* This code is creating a Redux store using the `createStore` function from the Redux library. The
`createStore` function takes three arguments: */
const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
