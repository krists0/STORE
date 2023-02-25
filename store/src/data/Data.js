

  import React, { useEffect, useRef, useState } from "react";
 import App from "../App.js";
  
  function initProduct() {
  
    const [initProduct, setInit] = useState([]);

    useEffect(() => {//use effect after first render 
      console.log("data =" + initProduct.length)
      fetch("https://fakestoreapi.com/products")
        .then((res) => {
          return res.json()
        }).then(
          (initProduct) => setInit(initProduct)// set the todos list from server 
        );
    }, []);

  
  
    return (
      <App initProduct={initProduct}> </App>
    );
  }
  
  export default initProduct;
  
  
  /**
   * {products.map(({ id, title, price, image }) => {
          return (
            <Products key={id} id={id} title={title} price={price} image={image} />
          );
          })}
   */
  
  /**
   * useEffect(()=>{//use effect after first render 
      fetch("https://fakestoreapi.com/products")
      .then((res)=>{
         return res.json()
      }).then(
          (products)=>setProducts(products)// set the todos list from server 
      );
          }, []);
  
   */  