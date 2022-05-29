import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";

import auth from "../../firebase.init";
import Item from "../Item/Item";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getItems = async () => {
      const email = user.email;
      const url = `http://localhost:5000/items?email=${email}`;
      console.log("Item get URL:", url);
      try {
        const { data } = await axiosPrivate.get(url);
        setItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItems();
  }, [user, navigate]);
  return (
    <div>
      <h1 className="text-primary text-center mt-5"> My Items</h1>
      <h2>My items: {items.length}</h2>
      <div className="items-container">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Item Name</th>
              <th>Total Items</th>
              <th>Total Price</th>
              <th>Location</th>
              <th>Remove Item</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <Item key={item._id} item={item} index={index}></Item>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyItems;
