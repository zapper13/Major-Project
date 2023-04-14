import "./CartScreen.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Components
import CartItem from "../components/CartItem";

// Actions
import { addToCart, removeFromCart } from "../redux/actions/cartActions";

/**
 * The CartScreen function uses hooks to access and modify the cart state, including handling quantity
 * changes and removing items from the cart.
 */
const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {}, []);

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

/**
 * The function calculates the total quantity of items in a shopping cart.
 * @returns The `getCartCount` function is returning the total quantity of items in the `cartItems`
 * array. It uses the `reduce` method to iterate over each item in the array and add up the `qty`
 * property of each item. The `Number` function is used to convert the `qty` value to a number before
 * adding it to the total. The initial value of the `qty
 */
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

/**
 * The function calculates the subtotal of items in a shopping cart.
 * @returns The function `getCartSubTotal` is returning the total price of all items in the cart,
 * calculated by multiplying the price of each item by its quantity and then summing up all the prices.
 * The result is returned as a string with two decimal places using the `toFixed` method.
 */
  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

/* This is the JSX code that renders the CartScreen component. It returns a div with two child divs,
one for the left side of the screen and one for the right side. The left side contains the shopping
cart items, which are mapped over using the `cartItems.map()` method and rendered using the CartItem
component. If the cart is empty, a message is displayed with a link to go back to the home page. The
right side contains the cart subtotal and a button to proceed to checkout. The `getCartCount()` and
`getCartSubTotal()` functions are used to calculate the cart subtotal and item count. */

  return (
    <>
      <div className="cartscreen">
        <div className="cartscreen__left">
          <h2>Shopping Cart</h2>

          {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
        </div>

        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
          </div>
          <div>
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartScreen;
