import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export default function NavBar({ getTotalItems, setBasketOpen }) {
  
 


 
  return (
    <AppBar position="static">
        <Toolbar>
          <b>Shopping Cart</b>    |    
          <div />
          <div onClick={() => setBasketOpen(true)}
          >
            <Badge badgeContent={getTotalItems} color="secondary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </div>
        </Toolbar>
      </AppBar>
  );
}
