/* These lines of code are defining and exporting constants that will be used as action types in a
Redux store. They are related to getting a list of products from an API and handling the success or
failure of that request. The naming convention used is to have the action type name in all caps,
with the word "REQUEST", "SUCCESS", or "FAIL" appended to it to indicate the different stages of the
action. */
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAIL = "GET_PRODUCTS_FAIL";

export const GET_PRODUCT_DETAILS_REQUEST = "GET_PRODUCT_DETAILS_REQUEST";
export const GET_PRODUCT_DETAILS_SUCCESS = "GET_PRODUCT_DETAILS_SUCCESS";
export const GET_PRODUCT_DETAILS_FAIL = "GET_PRODUCT_DETAILS_FAIL";
export const GET_PRODUCT_DETAILS_RESET = "GET_PRODUCT_DETAILS_RESET";
