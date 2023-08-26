import "./Footer.scss";

import React from "react";

import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum a
            ipsam magnam alias voluptatibus assumenda architecto! Omnis eveniet,
            ducimus earum sit deserunt atque consequuntur unde, quas, possimus
            officiis dolores ipsa.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-items">
            <FaLocationArrow />
            <div className="text">Ikgptu jalandhar kapurthala</div>
          </div>
          <div className="c-items">
            <FaMobileAlt />
            <div className="text">1234567890</div>
          </div>
          <div className="c-items">
            <FaEnvelope />
            <div className="text">Email:dummy@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Menu item-1</div>
          <div className="text">Menu item-1</div>
          <div className="text">Menu item-1</div>
          <div className="text">Menu item-1</div>
          <div className="text">Menu item-1</div>
          <div className="text">Menu item-1</div>
          <div className="text">Menu item-1</div>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <div className="text">Home</div>
          <div className="text">About</div>
          <div className="text">Privacy Policy</div>
          <div className="text">Return</div>
          <div className="text">Terms & condition</div>
          <div className="text">Contact us</div>
          <div className="text">Menu item-1</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">@copy; tribhuwan2023 || Electric World</div>
          <img src={Payment} alt="payment" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
