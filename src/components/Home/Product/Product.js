import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
const Product = ({ product }) => {
  const { _id, name, image, about, price, quantity, supplier_name } = product;
  const navigate = useNavigate();
  const navigateToServiceDetail = id => {
    navigate(`/products/${id}`);
  }
  return (
    <div className='product'>
      <img className='w-100' src={image} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Supplier Name: {supplier_name}</p>
      <p><small>{about}</small></p>
      <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-primary'>Book: {name}</button>
    </div>
  );
};

export default Product;
