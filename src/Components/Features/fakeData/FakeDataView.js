import React from "react";
import { useDispatch, useSelector } from "react-redux";

const FakeDataView = () => {
  const { isLoading, products, error } = useSelector((state) => state.fakeData);
  const dispatch = useDispatch();
  return <div></div>;
};

export default FakeDataView;
