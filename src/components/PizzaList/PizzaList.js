import React, { useState,useEffect } from 'react';
import PizzaItem from '../PizzaItem';
import './PizzaList.css';
const PizzaList = () => {
    
const [pizzaData,setPizzaData]=useState([]);



useEffect(()=>{
        fetchData();
        
        // eslint-disable-next-line 
},[])

const fetchData= async() =>{
    const result=await fetch('http://localhost:3000/pizzas.json');
    const data=await result.json();
    setPizzaData(data);
    console.log("data is"+JSON.stringify(pizzaData)); 
}
    return ( 
        <div className="container">
            <div className="row">
         {pizzaData&&pizzaData.map(pizzaItemData=><PizzaItem key={pizzaItemData.id} {...pizzaItemData} ></PizzaItem>)}
       
         </div>
      
       </div>

     );
}
 
export default PizzaList;