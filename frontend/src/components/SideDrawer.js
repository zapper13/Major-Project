import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * The SideDrawer function retrieves the cart items from the state and calculates the total quantity of
 * items in the cart.
 */
const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ["sidedrawer"];

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

/* The `if (show)` statement is checking if the `show` prop is true or not. If it is true, the class
name `"show"` is added to the `sideDrawerClass` array using the `push()` method. */
  if (show) {
    sideDrawerClass.push("show");
  }

  return (
    <div className={sideDrawerClass.join(" ")}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart{" "}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
