
import React, { useContext ,useState} from 'react';
import Button from "@mui/material/Button";
import "../../components/Basket/Custom.css";
import AddContext from "../AddContext.js";


const CartItem = ({ item, handleRemoveItemFromBaket }) => {

 
  const addToBasket=useContext(AddContext);
  console.log("cart items ITEM NAME "+item.title); 
  return (
    <aside>
      <div className="itemCart">
        <div>
          <h3>{item.title}</h3>
          <div className="itemInfo">
            <p>Price: {item.price} $</p>
            
          </div>
          <div className="buttons">
            <Button onClick={ () =>handleRemoveItemFromBaket(item.id)} size="small" disableElevation variant="contained">
              -
            </Button>
            <p> {item.amount}</p>
            <Button
              size="small"
              disableElevation
              variant="contained"
              onClick={() =>addToBasket(item.id)}
            >
              +
            </Button>
          </div>
        </div>
        <img src={item.image} />
      </div>
    </aside>
  );
};
export default CartItem;