import React from "react";
import Banner from "../Banner/Banner";
import Inventory from "../Inventory/Inventory";
import SpecialOffer from "../SpecialOffer/SpecialOffer";

import "./Home.css";
const Home = () => {
  return (
    <div className="w-75 mx-auto">

      <Banner></Banner>
      <Inventory></Inventory>
      <SpecialOffer></SpecialOffer>
    </div>
  );
};

export default Home;
