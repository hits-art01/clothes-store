import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "../ProductItem/ProductItem";
import "./products.scss";

const Products = () => {
  const goods = useSelector((state) => state.goods.goods);
  return (
    <div className="goods-body">
      {goods.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Products;
