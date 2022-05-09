import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Inventory.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div id="inventory" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5"> Our Products</h1>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
