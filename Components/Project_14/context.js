import React, { useContext, useEffect, useReducer, useState } from "react";
import cartItems from "./data";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearItem = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };
  const increment = (id) => {
    dispatch({ type: "INCREMENT", payload: id });
    console.log("increment function called");
  };
  const decrement = (id) => {
    dispatch({ type: "DECREMENT", payload: id });
    console.log(id);
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTALS" });
    // console.log("context useEffect");
  }, [state.cart]);
  return (
    <AppContext.Provider value={{ ...state, clearItem, removeItem, increment, decrement }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
