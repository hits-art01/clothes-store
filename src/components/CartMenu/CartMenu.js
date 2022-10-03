import React from "react";
import { useSelector } from "react-redux";
import { calcTotalPrice } from "../../calcTotalPrice";
import "./cart-menu.scss";
import { TiDeleteOutline } from "react-icons/ti";
import { deleteItemInCart } from "../../redux/actions";
import CartItem from "../CartItem/CartItem";

const CartMenu = () => {
  const items = useSelector((state) => state.cart.items);
  const totalPrice = calcTotalPrice(items);

  return (
    <div className="cart-menu">
      {items.length > 0 ? (
        items.map((item) => <CartItem item={item} key={item.id} />)
      ) : (
        <div>The cart is empty</div>
      )}

      {items.length > 0 ? (
        <div className="cart-menu__total-price">
          <span>Total:</span>
          <span>{totalPrice}$</span>
        </div>
      ) : null}
    </div>
  );
};

export default CartMenu;
