import React, { useState } from "react";
import "./cart-block.scss";
import { HiOutlineShoppingCart, HiShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import CartMenu from "../CartMenu/CartMenu";

const CartBlock = () => {
  const items = useSelector((state) => state.cart.items);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="cart-block">
      <div onClick={handleClick}>
        {items.length > 0 ? (
          <HiShoppingCart className="cart" />
        ) : (
          <HiOutlineShoppingCart className="cart" />
        )}
        {items.length > 0 ? (
          <div className="items-quantity">{items.length}</div>
        ) : null}
      </div>
      {isVisible ? <CartMenu /> : null}
    </div>
  );
};

export default CartBlock;
