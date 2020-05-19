import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import PizzaList from "../components/PizzaList";
import CartContext from "../CartContext";
import Cart from "../components/Cart";
import TopNav from "../components/TopNav";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App container">
      <Router>
        <CartContext.Provider value={[cart, setCart]}>
          <TopNav></TopNav>
          <Route exact path="/" component={PizzaList} />
          <Route exact path="/cart" component={Cart} />
        </CartContext.Provider>
      </Router>
    </div>
  );
}

export default App;
