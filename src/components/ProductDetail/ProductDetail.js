import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  console.log("ProductId=", productId);

  useEffect(() => {
    const url = `http://localhost:5000/products/${productId}`;
    // console.log(url);
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId]);
  const checkLink = `/checkout/${productId}`;

  return (
    <div className="text-center">
      <h2>You are about to book: {product.name}</h2>
      <img className="w-50" src={product.image} alt="" />
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Quantity: {product.quantity}</p>
      <p>Supplier Name: {product.supplier_name}</p>
      <p>
        <small>{product.about}</small>
      </p>
      <div className="text-center">
        <Link to={checkLink}>
          <button className="btn btn-primary">Proceed Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductDetail;
