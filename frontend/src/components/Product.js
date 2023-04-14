import "./Product.css";
import { Link } from "react-router-dom";

/**
 * The function returns a component that displays product information and an image, with a link to view
 * more details.
 * @returns The `Product` component is being returned, which renders a product card with an image,
 * name, description, price, and a "View" button that links to a specific product page.
 */
const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
