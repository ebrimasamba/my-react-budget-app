import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: JSON.parse(localStorage.getItem("transactions")) || [],
};

export const TransactionContext = createContext(initialState);

export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("transactions"))) {
      initialState.transactions = JSON.parse(
        localStorage.getItem("transactions")
      );
      console.log("local storage has value", initialState.transactions);
    } else {
      localStorage.setItem(
        "transactions",
        JSON.stringify(initialState.transactions)
      );
      console.log("local storage empty");
    }
  }, []);

  const deleteTransactions = (id) => {
    dispatch({
      type: "DELETE_TRANSACTIONS",
      payload: id,
    });
  };

  const addTransactions = (name, amount) => {
    if (name === "") {
      alert("your item has no name");
      return;
    }

    if (Number(amount) === 0 || amount === "") {
      alert("you transaction amount cannot be empty or zero");
      return;
    }

    dispatch({
      type: "ADD_TRANSACTIONS",
      payload: { name, amount },
    });
  };

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state.transactions));
  }, [state.transactions]);

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
