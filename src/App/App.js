import React, { useState } from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import PizzaList from "../components/PizzaList/PizzaList";
import CartContext from "../CartContext";
import Cart from "../components/Cart/Cart";
import TopNav from "../components/TopNav/TopNav";
import BottomNav from "../components/BottomNav/BottomNav";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <React.Fragment>
    <div className="App container">
      <Router>
        <CartContext.Provider value={[cart, setCart]}>
          <TopNav></TopNav>
          <Route exact path="/" component={PizzaList} />
          <Route exact path="/cart" component={Cart} />
        </CartContext.Provider>
        </Router>
    </div>
    <BottomNav></BottomNav>
    </React.Fragment>
  );
}

export default App;
