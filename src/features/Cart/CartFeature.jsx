import React from 'react';
import { useSelector } from 'react-redux';

CartFeature.propTypes = {};

function CartFeature(props) {
  const carts = useSelector((state) => state.cart);
  if (!carts) return;
  console.log(carts);
  return <div>Cart {carts}</div>;
}

export default CartFeature;
