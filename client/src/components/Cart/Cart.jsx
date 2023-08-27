import "./Cart.scss";
import CartItem from "./CartItem/CartItem";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-button" onClick={() => setShowCart(false)}>
            <span className="text">Close</span>
            <MdClose />
          </span>
        </div>

        {/* <div className="empty-cart">
            <BsCartX />
            <span>No products in the cart</span>
            <button className="return-cta">Return to shop</button>
        </div> */}

        <>
          <CartItem />
          <div className="cart-footer">
            <div className="subtotlal">
                <span className="text">Subtotal : </span>
                <span className="text total">₹1234</span>
            </div>

            <div className="button">
                <button className="checkout-cta">Checkout</button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Cart;
