import React from "react";

const SingleProduct = ({ product }) => {
  return (
    <div className="flex flex-col items-center p-2 bg-gray-600">
      <div className="image w-48">
        <img className="w-full" src={product.image} alt="" />
      </div>
      <div className="body text-center">
        <h3>{product.title}</h3>
        <h1>{product.price}</h1>
      </div>
      <button type="button" className="btn px-5 bg-blue-600 py-3 rounded-full">
        Buy Now
      </button>
    </div>
  );
};

export default SingleProduct;
