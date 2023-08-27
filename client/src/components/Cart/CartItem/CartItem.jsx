import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import prod from "../../../assets/products/earbuds-prod-3.webp";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod} alt="product" />
        </div>
        <div className="prod-details">
          <div className="name">product name</div>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>5</span>
            <span>+</span>
          </div>

          <div className="text">
            <span>3</span>
            <span>x</span>
            <span className="highlight">₹1234</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
