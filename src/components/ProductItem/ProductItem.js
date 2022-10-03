import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  deleteItemInCart,
  getGoods,
  reloadGoods,
  setCurrentProduct,
  setItemInCart,
} from "../../redux/actions";
import Button from "../../UI/Button/Button";
import ProductBuy from "../ProductBuy/ProductBuy";
import "./product-item.scss";
import ProductCover from "./ProductCover";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const pageClick = () => {
    navigate(`product/${product.title}`);
    dispatch(setCurrentProduct(product));
    dispatch(reloadGoods([]));
  };
  return (
    <div className="product-column" onClick={pageClick}>
      <div className="product-item">
        <ProductCover product={product} />
        <div className="product-item__title">{product.title}</div>
        <ProductBuy product={product} />
      </div>
    </div>
  );
};

export default ProductItem;
