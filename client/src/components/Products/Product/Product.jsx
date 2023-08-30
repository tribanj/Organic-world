import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.scss";

const Product = ({ id, data }) => {
  const navigate = useNavigate();
  // Check if data and its nested properties exist
  // if (!data || !data.img || !data.img.dat || !data.img.dat[0] || !data.img.dat[0].attributes) {
  //   return <p>Product data is incomplete.</p>;
  // }

  return (
    <div className="product-card" onClick={() => navigate("/product/" + id)}>
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
          alt="prod"
        />
      </div>
      <div className="product-details">
        {/* Use the actual product name and price */}
        <span className="name">{data.title}</span>
        <span className="price">&#8377; {data.price}</span>
      </div>
    </div>
  );
};

export default Product;
