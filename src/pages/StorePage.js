import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../components/ProductItem/ProductItem";
import Products from "../components/Products/Products";
import { getGoodsWatch } from "../redux/actions";

const StorePage = () => {
  const dispatch = useDispatch();
  const goods = useSelector((state) => state.goods.goods);
  useEffect(() => {
    dispatch(getGoodsWatch());
  }, []);
  return (
    <div>
      {goods.length > 0 ? (
        <Products />
      ) : (
        <div className="loader-cont">
          <div className="lds-dual-ring"></div>
        </div>
      )}
    </div>
  );
};

export default StorePage;
