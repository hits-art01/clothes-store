import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { deleteItemInCart } from "../../redux/actions";
import "./cart-item.scss";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemInCart(item.id));
  };
  return (
    <div className="cart-menu__list">
      <div>{item.title}</div>

      <div style={{ display: "flex" }}>
        <div>{item.price}$</div>

        <TiDeleteOutline
          style={{ width: "20px", height: "20px", marginLeft: "10px" }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default CartItem;
