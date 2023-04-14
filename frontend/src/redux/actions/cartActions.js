import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

/**
 * This function adds a product to the cart and saves the cart items to local storage.
 * @param id - The ID of the product being added to the cart.
 * @param qty - qty stands for quantity, which is the number of items the user wants to add to their
 * cart.
 */
export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      imageUrl: data.imageUrl,
      price: data.price,
      countInStock: data.countInStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

/**
 * This function removes an item from the cart and updates the cart in local storage.
 * @param id - The id parameter is the unique identifier of the item that needs to be removed from the
 * cart.
 */
export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
