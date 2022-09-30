import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import "./products.scss";

const Products = () => {
  const goods = useSelector((state) => state.goods.goods);
  return (
    <div>
      {goods.map((product, index) => (
        <ProductItem product={product} key={index} />
      ))}
    </div>
  );
};

export default Products;
