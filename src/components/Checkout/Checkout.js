
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Checkout = () => {
  const { itemId } = useParams();
  const [item] = useItems(itemId);
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  // const url = `https://peaceful-caverns-71205.herokuapp.com/.../${itemId}`;

  const handlePlaceOrder = event => {
    event.preventDefault();
    const item = {
      name: event.target.name.value,
      price: event.target.price.value,
      quantity: event.target.quantity.value,
      supplier_name: event.target.supplier_name.value
    }
    axios.post('https://peaceful-caverns-71205.herokuapp.com/items', item)
      .then(response => {
        const { data } = response;
        if (data.insertedId) {
          toast('My item is booked!!!');
          event.target.reset();
        }
      })
  }

  return (
    <div className='w-50 mx-auto'>
      <h2>Please select: {item.name}</h2>
      <form onSubmit={handlePlaceOrder}>

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
          name="order_name"
          disabled
          // value={part.name}
          className="w-100 mb-2"
        />
        <input
          //Here we write a
          // onMouseLeave={calculatePrice}
          type="number"
          name="order_quantity"
          placeholder="Order Quantity"
          className="w-100 mb-2"
          {...register("order_quantity", {
            required: {
              value: true,
              message: "Order Quantity is Required",
            },
          })}
        />
        {/* <span style={{ color: "red" }}>{numberError}</span> */}
        <input
          type="number"
          name="order_price"
          disabled
          // value={totalPrice}
          className="w-100 mb-2"
        />
        <input
          type="text"
          name="order_address"
          placeholder="Order Address"
          className="w-100 mb-2"
        />

        <button
          type="submit"
          // onClick={() => navigateToPartOrder(part._id)}
          className="btn btn-secondary w-full max-w-xs"
        >
          Order:
          {/* {part.name} */}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
