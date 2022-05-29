import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useItems from "../../hooks/useItems";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading/Loading";
import { useQuery } from "react-query";

const Checkout = () => {
  const { productId } = useParams();
  const [item] = useItems(productId);
  const [user, loading, error] = useAuthState(auth);
  const [totalPrice, setTotalPrice] = useState(0);
  const { register, handleSubmit, reset } = useForm();

  console.log("ItemId: ", productId);
  const url = `http://localhost:5000/products/${productId}`;

  const { data: product, isLoading } = useQuery(["products", productId], () =>
    fetch(url, {
      method: "GET",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      // },
    }).then((res) => res.json())
  );

  console.log(product);
  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  const onSubmit = (data, event) => {
    event.preventDefault();
    const items = {
      user_email: user.email,
      user_name: user.displayName,
      item_name: product.name,
      item_quantity: event.target.item_quantity.value,
      item_price: totalPrice,
      item_address: event.target.item_address.value,
    };
    const url = `http://localhost:5000/items`;
    console.log("Item API:", url);
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        // authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(items),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Item is:", result);
      });
  };

  const calculatePrice = (event) => {
    const inputValue = event.target.value;
    const totalPrice = event.target.value * product.price;
    setTotalPrice(totalPrice);

    // if (
    //   inputValue < part.minimum_quantity ||
    //   inputValue > part.available_quantity
    // ) {
    //   event.target.value = 0;
    //   setTotalPrice(0);
    //   setNumberError(
    //     `Error occured. Number must be between ${part.minimum_quantity} and ${part.available_quantity}`
    //   );
    // } else {
    //   console.log(totalPrice);
    // setTotalPrice(totalPrice);
    // setNumberError("");
    // }

    // return totalPrice;
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please Order: {product.name}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='email' required readOnly disabled /> */}
        <br />
        <input
          type="text"
          name="user_name"
          disabled
          value={user?.displayName || ""}
          className="w-100 mb-2"
        />
        <br />
        <input
          type="user_email"
          name="email"
          disabled
          value={user?.email || ""}
          className="w-100 mb-2"
        />
        <input
          type="text"
          name="item_name"
          disabled
          value={product.name}
          className="w-100 mb-2"
        />
        <input
          //Here we write a
          onMouseLeave={calculatePrice}
          type="number"
          name="item_quantity"
          placeholder="Item Quantity"
          className="w-100 mb-2"
          {...register("item_quantity", {
            required: {
              value: true,
              message: "Item Quantity is Required",
            },
          })}
        />
        {/* <span style={{ color: "red" }}>{numberError}</span> */}
        <input
          type="number"
          name="item_price"
          disabled
          value={totalPrice}
          className="w-100 mb-2"
        />
        <input
          type="text"
          name="item_address"
          placeholder="Order Address"
          className="w-100 mb-2"
        />

        <button
          type="submit"
          // onClick={() => navigateToPartOrder(part._id)}
          className="btn btn-secondary w-full max-w-xs"
        >
          Order:
          {product.name}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
