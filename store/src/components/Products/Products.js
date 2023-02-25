import React from "react";
import Product from "./Product";
import "../Products/Products.css";

const Products = ({ products }) => {

  return (
    <React.Fragment>
      <section className="products">
        {products.map(({ id, title, price, image }) => {
          return (
            <Product key={id} id={id} title={title} price={price} image={image} />
          );
        })}
      </section>
    </React.Fragment>
  );
};

export default Products;