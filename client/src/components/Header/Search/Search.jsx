import "./Search.scss";
import { MdClose } from "react-icons/md";

import prod from "../../../assets/products/headphone-prod-3.webp";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose onClick={() => setShowSearch(false)} className="close-btn" />
      </div>

      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="headphone" />
            </div>

            <div className="prod-details">
                <span className="name">Product name</span>
                <span className="desc">Product description</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
