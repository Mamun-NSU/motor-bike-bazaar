import React from "react";
import Products from "../Products/Products";
import "./Home.css";
const Home = () => {
  return (
    <div className="w-75 mx-auto">
      <h2>This is Home Section</h2>
      <Products></Products>
    </div>
  );
};

export default Home;
