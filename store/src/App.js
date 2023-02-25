import logo from './logo.svg';
import './App.css';
import Products from './components/Products/Products';
import Header from './components/Header/Header';
import React, { useEffect, useRef, useState } from "react";


import Footer from './components/Footer';
function App() {

  
 
 
  const [initProduct, setInit] = useState([]);
  const [products, setProducts] = useState(initProduct);
  

  useEffect(() => {//use effect after first render 
   
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json()
      }).then(
        (initProduct) => {setInit(initProduct);// set the todos list from server 
        setProducts(initProduct);
      });
  }, []);


  const filter = (category) => {
    
    let newProducts =
      category === "All"
        ? initProduct
        : initProduct.filter((product) => category === product.category);
    console.log("newProducts " + newProducts);
    setProducts(newProducts);
    setInit(newProducts);

  };
  return (
    <div className="App">
      
      <header className="App-header">
        <Header products={products} filterByCategory={filter}></Header>
        <Products products={products}></Products>
        <Footer className="footer"></Footer>
      </header>
    </div>
  );
}

export default App;


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




        const [initProduct, setInit] = useState([]);

  useEffect(() => {//use effect after first render 
    console.log("jkjk =" + initProduct.length)
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json()
      }).then(
        (initProduct) => setInit(initProduct)// set the todos list from server 
      );
  }, []);
 */