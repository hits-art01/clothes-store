import React from "react";
import "./cart-block.scss";
import { HiOutlineShoppingCart } from "react-icons/hi";

const CartBlock = () => {
  return (
    <div className="cart-block">
      <HiOutlineShoppingCart className="cart" />
    </div>
  );
};

export default CartBlock;
