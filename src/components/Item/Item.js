import React from "react";
import "./Item.css";
import useItems from "../../hooks/useItems";
const Item = ({ item }) => {
  const { _id, name, image, about, price, quantity, supplier_name } = item;
  const [items, setItems] = useItems();

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://peaceful-caverns-71205.herokuapp.com/items/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
        });
    }
  };
  return (
    <div className="item">
      <img className="w-100" src={image} alt="" />
      <h2>{name}</h2>
      <p>Price: {price}</p>
      <p>Quantity: {quantity}</p>
      <p>Supplier Name: {supplier_name}</p>
      {/* <p>
        <small>{about}</small>
      </p> */}
      <button onClick={() => deleteItem(_id)} className="btn btn-primary">
        Delete: {name}
      </button>
    </div>
  );
};

export default Item;
