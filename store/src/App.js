
import './App.css';
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import React, { useEffect, useState } from "react";
import AddContext from "./components/AddContext.js";
import Footer from './components/Footer';
import CartList from "./components/Basket/CartList.js";
import Navbar from "./components/Header/NavBar.js";
import Drawer from "@mui/material/Drawer";



function App() {

  const [initProduct, setInit] = useState([]);
  const [products, setProducts] = useState(initProduct);
  const [basketItems, setBasket] = useState([]);
  const [basketOpen, setBasketOpen] = useState(false);
  
   const addToBasket=(id)=>{
    let item=products[id-1];
      setBasket((prev) => {
        // Search the item in the array
        const isItemInTheCart = prev.find((i) => i.id === item.id);
        if (isItemInTheCart) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, amount: i.amount + 1 } : i
          );
        }
        return [...prev, { ...item, amount: 1 }];
      });
   }


  useEffect(() => {//use effect after first render 
   
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json()
      }).then(
        (initProduct) => {setInit(initProduct);// set the todos list from server 
        setProducts(initProduct);
      });
  }, []);

  const getTotalItems = (basketItems) =>
   basketItems.reduce((acum, i) => acum + i.amount, 0);

  const filter = (category) => {
    
    let newProducts =
      category === "All"
        ? initProduct
        : initProduct.filter((product) => category === product.category);
    console.log("newProducts " + newProducts);
    setProducts(newProducts);
    setInit(newProducts);

  };
  // basket 

  
  const handleRemoveItemFromBaket = (id) => {
    
    console.log("handleRemoveItemFromBasket");
    setBasket((prev) => {
      const foundItem = prev.find((i) => i.id === id);
      if (foundItem) {
        if (foundItem.amount === 1) {
          const newArray = prev.filter((i) => i.id !== id);
          return newArray;
        } else {
          return prev.map((i) =>
            i.id === id ? { ...i, amount: i.amount - 1 } : i
          );
        }
      } else {
        return prev;
      }
    });
  };
  
  return (
    <AddContext.Provider value={addToBasket}>
   
        
          <Navbar
              
              getTotalItems={getTotalItems(basketItems)}
              setBasketOpen={setBasketOpen}
            ></Navbar>
          
          <Drawer
              anchor="right"
              open={basketOpen}
              onClose={() => setBasketOpen(false)}
            >
              <CartList

              handleRemoveItemFromBaket={handleRemoveItemFromBaket}
              basketItems={basketItems}></CartList>
              Cart
            </Drawer>
          
            
          <header className="App-header">

        
          
            <Header products={products} filterByCategory={filter}></Header>
            <Products products={products}></Products>
            <Footer className="footer"></Footer>
          </header>
    
    
      
    </AddContext.Provider>
  );
}

export default App;
