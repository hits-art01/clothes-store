import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemInCart, setItemInCart } from "../../redux/actions";
import Button from "../../UI/Button/Button";

const ProductBuy = ({ product }) => {
  const items = useSelector((state) => state.cart.items);
  const isItemInCart = items.some((item) => item.id === product.id);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.stopPropagation();
    if (isItemInCart) {
      dispatch(deleteItemInCart(product.id));
    } else {
      dispatch(setItemInCart(product));
    }
  };

  return (
    <Button
      className="product-item__buy"
      type={isItemInCart ? "secondary" : "primary"}
      onClick={handleClick}
    >
      {product.price}$ {isItemInCart ? "Delete" : "Add"}
    </Button>
  );
};

export default ProductBuy;
