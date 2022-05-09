import "./App.css";
import React from "react";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";

import { Route, Routes } from "react-router-dom";
import Blogs from "./components/Blogs/Blogs";
import About from "./components/About/About";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Checkout from "./components/Checkout/Checkout";
import ManageProducts from "./components/ManageProducts/ManageProducts";

import NotFound from "./components/Shared/NotFound/NotFound";
import AddProduct from "./components/AddProduct/AddProduct";
import Home from "./components/Home/Home/Home";
import MyItems from "./components/MyItems/MyItems";

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
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/Addproduct" element={<AddProduct></AddProduct>}></Route>
        <Route
          path="/manage"
          element={<ManageProducts></ManageProducts>}
        ></Route>
        <Route path="/items" element={<MyItems></MyItems>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
