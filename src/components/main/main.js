import React, { useState, useReducer, useEffect } from "react";
import Navbar from "../navbar";
import Rectangle from "../rectangle";

import "./main.scss";

const initialState = {
  searchPanel: true,
  basket: false
};

const isSerchingReducer = (isSerching, action) => {
  switch (action.type) {
    case "is_searching":
      isSerching.searchPanel = true;
      isSerching.basket = false;

      return isSerching;
    case "basket":
      isSerching.searchPanel = false;
      isSerching.basket = true;
      return isSerching;
  }
};

const Main = () => {
  const [isSerching, dispatch] = useReducer(isSerchingReducer, initialState);
  const [itemsCount, setItemsCount] = useState(0);

  useEffect(() => {
    dispatch({ type: "is_searching" });
  });

  const onViewSelected = type => {
    dispatch({ type });
  };

  return (
    <div className="main">
      <h1 className="label">Мои организации</h1>
      <Navbar onViewSelected={onViewSelected} itemsCount={itemsCount} />
      <Rectangle />
    </div>
  );
};

export default Main;
