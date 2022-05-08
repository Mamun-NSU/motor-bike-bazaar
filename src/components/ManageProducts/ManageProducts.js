import React from "react";
import useProducts from "../../hooks/useProducts";

const ManageProducts = () => {
  const [products, setProducts] = useProducts();

  const handleDelete = (id) => {};
  return (
    <div className="w-50 mx-auto">
      <h2>Please manage your products</h2>
      {products.map((product) => (
        <div key={product._id}>
          <h5>
            {product.name}{" "}
            <button onClick={() => handleDelete(product._id)}>X</button>
          </h5>
        </div>
      ))}
    </div>
  );
};

export default ManageProducts;
