/* eslint-disable */

import React, { useContext, useState, useEffect } from "react";
import { TransactionContext } from "./TransactionContext";

export const Balance = () => {
  const { transactions } = useContext(TransactionContext); // const [amount, setAmount] = useState(0);

  // useEffect(() => {
  //   const amount = transactions.reduce((acc, prevItem) => {
  //     acc += prevItem;
  //   }, 0);
  //   setAmount(() => {

  //   })
  //   console.log(amount);
  // }, [transactions]);

  return (
    <div className="text-center mt-3">
      <h4 className="uppercase text-sm">Your Balance</h4>
      <p className="font-semibold text-2xl">
        D
        {Intl.NumberFormat().format(
          transactions.reduce(
            (acc, currValue) => acc + Number(currValue.amount),
            0
          )
        )}
      </p>
    </div>
  );
};
