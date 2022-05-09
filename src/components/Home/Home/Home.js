import React from "react";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";

import "./Home.css";
const Home = () => {
  return (
    <div className="w-75 mx-auto">
      <h2>This is Home Section</h2>
      <Banner></Banner>
      <Inventory></Inventory>
    </div>
  );
};

export default Home;
