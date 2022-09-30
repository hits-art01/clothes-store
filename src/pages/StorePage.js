import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem/ProductItem";
import Products from "../components/Products/Products";
import { getGoodsWatch } from "../redux/actions";

const StorePage = () => {
  const goods = useSelector((state) => state.goods.goods);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGoodsWatch());
  }, []);
  return (
    <div>
      <Products />
    </div>
  );
};

export default StorePage;
