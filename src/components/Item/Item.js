import React from "react";
import "./Item.css";
import useItems from "../../hooks/useItems";
const Item = ({ item, index }) => {
  const {
    _id,
    user_email,
    user_name,
    item_name,
    item_quantity,
    item_price,
    item_address,
  } = item;
  const [items, setItems] = useItems();

  const deleteItem = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/items/${id}`;
      console.log("Delete URL:", url);
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
    <tr>
      <th>{index + 1}</th>
      <td>{user_email}</td>
      <td>{item_name}</td>
      <td>{item_quantity}</td>
      <td>{item_price}</td>
      <td>{item_address}</td>
      <td>
        <button onClick={() => deleteItem(_id)} className="btn btn-primary">
          Delete: {item_name}
        </button>
      </td>
    </tr>
  );
};

export default Item;
