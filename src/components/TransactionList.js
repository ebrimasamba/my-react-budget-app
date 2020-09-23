import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";
import { TransactionContext } from "./TransactionContext";

export const TransactionList = () => {
  const { transactions } = useContext(TransactionContext);
  useEffect(() => {
    console.log("Refresh UI");
  }, [transactions]);

  return (
    <div className="mt-5">
      <h3 className="font-semibold border-b pb-1 text-lg">Items</h3>
      <div className="text-black">
        {transactions.length > 0 ? (
          transactions.map((item, id) => (
            <Transaction
              name={item.name}
              amount={item.amount}
              key={id}
              id={id}
            ></Transaction>
          ))
        ) : (
          <p className="mt-3 text-gray-100">No items found</p>
        )}
      </div>
    </div>
  );
};
