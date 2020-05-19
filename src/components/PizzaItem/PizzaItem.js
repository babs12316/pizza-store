import React,{useContext} from "react";
import "./PizzaItem.css";
import CartContext from '../../CartContext';

const PizzaItem = ({id, name, price,pic,description }) => {
    const [cart,setCart] = useContext(CartContext);
    
   const handleClick=()=>{
      // console.log("i am clicked");
        const pizza={"id":id,"name":name,"price":price,"pic":pic,"description":description,"count":1}
        const alreadyAdded=cart.find(element => element.id === id);
        //console.log(`I am found ${cart.find(element => element.id === id)}`);
        //If item is not found in cart then attach to cart
        if(alreadyAdded===undefined){
           setCart(cart => [...cart, pizza]);
        }else{
           //if item is already added in cart then only increase its count
           const itemIndex=cart.findIndex(element=>element.id===id);
            cart[itemIndex].count+=1;  
         //    console.log(`Cart is ${JSON.stringify(cart)}`)
           // console.log("i am already added!"+itemIndex)
        }

      }
  return (
   <React.Fragment>
     
          <div className="col-sm-6 col-lg-3">
            <img src={'/images/'+pic} alt={name}/>
            <div className="title">{name}</div>
            <div className="description">{description}</div>
            <div className="price">Price: ${price}</div>
            <button onClick={handleClick}>Add to cart</button>
            </div>
           </React.Fragment>
  );
};

export default PizzaItem;
