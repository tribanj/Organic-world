import React from "react";
import "./Category.scss";
// import cat1 from "../../../assets/category/cat-1.jpg";
import { useNavigate } from "react-router-dom";
const Category = ({ categories }) => {
  const navigate = useNavigate();
  // Check if categories and categories.data exist
  if (!categories || !categories.data) {
    return <p>No categories data available.</p>;
  }

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((item) => (
          <div
            key={item.id}
            className="category"
            onClick={() => navigate(`/category/${item.id}`)}
          >
            <img
              src={
                process.env.REACT_APP_DEV_URL +
                item.attributes.img.data.attributes.url
              }
              alt="cat1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
