/* eslint-disable */

import React, { createContext, useState, useEffect } from "react";

export const TransactionContext = createContext();
export const TransactionProvider = ({ children }) => {
  const [database, setDatabase] = useState([]);
  const [isExpanded, setExpanded] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("budget")) {
      console.log("There is a local storage");
      startUp(JSON.parse(localStorage.getItem("budget")));
    } else {
      localStorage.setItem("budget", JSON.stringify(database));
      console.log("There is no local storage so we create one");
    }
    // eslint-disable-next-line
  }, []);
  const startUp = (localstorage) => {
    setDatabase(localstorage);
  };
  const updateDatabase = async (newItem) => {
    await setDatabase((prevItems) => [...prevItems, newItem]);
    await setTimeout(() => {
      console.log(database);
    }, 3000);
    await localStorage.setItem("budget", JSON.stringify(database));
    // console.log(database.length);
  };

  const deleteFromDatabase = (id) => {
    setDatabase(database.filter((value, index) => index !== id));
    localStorage.setItem("budget", JSON.stringify(database));
    console.log("database", database);
  };
  return (
    <TransactionContext.Provider
      value={{ database, updateDatabase, deleteFromDatabase, startUp }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
