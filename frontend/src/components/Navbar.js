import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * This is a functional component that renders a navbar and retrieves the cart items from the Redux
 * store using the useSelector hook.
 */
const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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

/* The `return` statement is returning the JSX code that represents the Navbar component. It includes a
navigation bar with a logo, links to the cart and shop pages, and a hamburger menu icon that
triggers a click event. The `getCartCount` function is used to display the number of items in the
cart as a badge on the cart link. The `useSelector` hook is used to access the cart state from the
Redux store. */
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>MERN Shopping Cart</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;
