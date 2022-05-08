import "./App.css";
import React from "react";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import Home from "./components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route
          path="/products/:productId"
          element={<ProductDetail></ProductDetail>}
        ></Route>
        <Route path="/about" element={<About></About>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
