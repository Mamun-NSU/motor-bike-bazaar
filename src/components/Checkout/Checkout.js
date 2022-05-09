
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useItems from '../../hooks/useItems';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const Checkout = () => {
  const { itemId } = useParams();
  const [item] = useItems(itemId);




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
        <input className='w-100 mb-2' type="text" name="name" placeholder='name' required />
        <br />
        <input className='w-100 mb-2' type="number" name="price" placeholder='price' required />
        <br />
        <input className='w-100 mb-2' type="number" name="quantity" placeholder='quantity' required />
        <br />
        <input className='w-100 mb-2' type="text" name="supplier_name" placeholder='supplier_name' required />
        <br />
        <input className='btn btn-primary' type="submit" value="Place item" />
      </form>
    </div>
  );
};

export default Checkout;
