import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../CartContext";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const[currency,setCurrency]=useState('USD');

  const reducer = (accumulator, item) => {
    return accumulator + item.price * item.count;
  };
  const totalPrice = cart.reduce(reducer, 0);

  const handleRemoveItem = (id) => {
    //Get the array without the element to be removed
    let filertedCart = cart.filter((item) => item.id !== id);
    setCart(filertedCart);
  };
  const handleOrder = () => {
    alert("Your order has been confirmed!");
  };
  const handleIncreaseCount = (index) => {
    //Create a copy of cart as we can't modify state directly
    let newCart = [...cart];
    //increase counter of clicked element by 1
    newCart[index].count += 1;
    //set newCart to cart
    setCart(newCart);
  };

  const handleDecreaseCount = (index) => {
    //Create a copy of cart as we can't modify state directly
    let newCart = [...cart];
    //increase counter of clicked element by 1
    newCart[index].count -= 1;
    //check if count is negative, if yes then set it zero as we don't want -ve item numbers
    if (newCart[index].count < 0) {
      newCart[index].count = 0;
    }
    //set newCart to cart
    setCart(newCart);
  };
  return (
    <React.Fragment>
      {cart.length > 0 && <h2 id="cartHeader">Cart</h2>}
      {cart.length === 0 ? (
        <p>Your cart is empty! Order a delicious pizza for stomach party :-)</p>
      ) : (
        cart.map((item, index) => (
          <div className="cartItem row" key={index}>
            <div className="col-xs-12 col-sm-3 col-lg-2">
              <img
                src={"/images/" + item.pic}
                alt={item.name}
                className="cartItemImage"
              ></img>
            </div>
            <div className="title col-xs-12 col-sm-3">
              {item.name}
              <p className="description">{item.description}</p>
            </div>
            <div className="col-sm-3" id="counter">
              <button
                onClick={() => handleIncreaseCount(index)}
                id="increaseCount"
              >
                +
              </button>
              {item.count}
              <button
                onClick={() => handleDecreaseCount(index)}
                id="decreaseCount"
              >
                -
              </button>
            </div>
            <div className="price col-sm-1">{currency==='EUR'?item.price* 0.91 * item.count:item.price*item.count}</div>
            <div className="col-sm-1">
              <img
                src={"/images/delete.svg"}
                alt="Remove item"
                className="cartDeleteImage"
                onClick={() => handleRemoveItem(item.id)}
              ></img>
            </div>
          </div>
        ))
      )}
      {cart.length > 0 && 
    
        <div className="row changeCurrency">
           <div className=" col-xs-6 col-sm-6">
        <h5>Currency</h5>
      <select onChange={(e)=>setCurrency(e.target.value)}>
         <option value="USD">USD</option>
        <option value="EUR">Euro</option>
       </select>
       </div>
       <div className=" col-xs-6 col-sm-6" >
      <h6 > Total: {currency==='EUR'?'€'+ (totalPrice*1.1*0.91).toFixed(2):'$'+ (totalPrice*1.1).toFixed(2)}
      <p className="note">10% added as a delivery cost </p>
      </h6>
      </div>
      </div>
 
       
      }
      {cart.length > 0 && (
        <div className="row order">
          <div className="col-xs-6 col-sm-6">
          <Link to="/" id="backMenu" >
            Back to Menu
          </Link>
          </div>
          <div className="col-xs-6 col-sm-6">
          <button onClick={handleOrder} id="orderNow" >
            Order Now!
          </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Cart;
