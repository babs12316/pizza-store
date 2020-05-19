import React, { useState, useEffect } from "react";
import PizzaItem from "../PizzaItem";
import "./PizzaList.css";
const PizzaList = () => {
  const [pizzaData, setPizzaData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetchData();
  // eslint-disable-next-line
  }, []);

  const fetchData = async () => {
    try {
      const result = await fetch("http://localhost:3000/pizzas.json");
      const data = await result.json();
      setPizzaData(data);
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div className="container">
      <div className="row">
        {error && (
          <div className="error">
            There is an Error <br /> {error}
          </div>
        )}
        {pizzaData &&
          pizzaData.map((pizzaItemData) => (
            <PizzaItem key={pizzaItemData.id} {...pizzaItemData}></PizzaItem>
          ))}
      </div>
    </div>
  );
};

export default PizzaList;
