import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleProduct from "../../SingleProduct/SingleProduct";
import { fetchProducts } from "./fakeDataSlice";

const FakeDataView = () => {
  const { isLoading, products, error } = useSelector((state) => state.fakeData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(products);
  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="all-products grid grid-cols-3 gap-3">
        {products &&
          products.map((product) => (
            <SingleProduct key={product.id} product={product}></SingleProduct>
          ))}
      </div>
    </div>
  );
};

export default FakeDataView;
