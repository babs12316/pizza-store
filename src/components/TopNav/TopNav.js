import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import "./TopNav.css";

const TopNav = () => {
  const [cart] = useContext(CartContext);

  return (
    <div className="topNav">
      <h2 id="test-id-1">
        <Link to="/">Pizza Shop</Link>
      </h2>
      <Link to="/cart">
        <img id="cart-basket" src="/images/cart.svg" alt="cart"></img>
        <div className="cart-icon">{cart.length}</div>
      </Link>
    </div>
  );
};

export default TopNav;
