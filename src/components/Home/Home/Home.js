import React from "react";
import Inventory from "../Inventory/Inventory";

import "./Home.css";
const Home = () => {
  return (
    <div className="w-75 mx-auto">
      <h2>This is Home Section</h2>
      <Inventory></Inventory>
    </div>
  );
};

export default Home;
