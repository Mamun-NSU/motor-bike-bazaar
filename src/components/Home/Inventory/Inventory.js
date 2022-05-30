import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Inventory.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://tranquil-falls-30970.herokuapp.com/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
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
