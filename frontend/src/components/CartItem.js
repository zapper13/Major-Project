import "./CartItem.css";
import { Link } from "react-router-dom";

/**
 * The `CartItem` function returns a component that displays information about a product in a shopping
 * cart, including an image, name, price, quantity selector, and a button to remove the item from the
 * cart.
 * @returns The `CartItem` component is being returned, which renders a div containing the image, name,
 * price, quantity select dropdown, and a delete button for a specific item in the cart. The component
 * receives props such as `item`, `qtyChangeHandler`, and `removeHandler` to handle changes in quantity
 * and removal of the item from the cart.
 */
const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartItem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">${item.price}</p>
      <select
        value={item.qty}
        onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
        className="cartItem__select"
      >
        {[...Array(item.countInStock).keys()].map((x) => (
          <option key={x + 1} value={x + 1}>
            {x + 1}
          </option>
        ))}
      </select>
      <button
        className="cartItem__deleteBtn"
        onClick={() => removeHandler(item.product)}
      >
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default CartItem;
