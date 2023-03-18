
import React, { useContext ,useState} from 'react';
import "../Products/Product.css";

import AddContext from '../AddContext';

import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import Drawer from '@mui/material/Drawer';


const Product = ({ image, title, price,id }) => {

  
  const addToBasket=useContext(AddContext);



  const handleAddToBasket = () => {

    addToBasket(id);
   
  };



    return (
      <>
      <div className="product-card">
       
        <div className="product-image">
          <img alt={"alt"} src={image} />
        </div>
        <div className="product-info">
          <h5>{title}</h5>
          <h6>{price}$</h6>

        </div>
     
        <Button onClick={handleAddToBasket}>add</Button>
        
      </div>
      </>
    );
  };
  
  export default Product;