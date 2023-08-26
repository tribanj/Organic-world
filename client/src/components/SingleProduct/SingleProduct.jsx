import "./SingleProduct.scss";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaCartPlus,
} from "react-icons/fa";

import prod from "../../assets/products/earbuds-prod-4.webp";
const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="prod" />
          </div>
          <div className="right">
            <span className="name">product name</span>
            <span className="price">Price</span>
            <span className="desc">product description</span>

            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>5</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                Add To Cart
              </button>
            </div>

            <span className="devider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>Headphones</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebookF size={16} />
                  <FaInstagram size={16} />
                  <FaLinkedinIn size={16} />
                  <FaTwitter size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
