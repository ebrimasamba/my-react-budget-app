import React, { useContext, useEffect, useState } from "react"
import { Transaction } from "./Transaction"
import { TransactionContext } from "./TransactionContext"
import { FaSearch } from "react-icons/fa"

export const TransactionList = () => {
  const { transactions } = useContext(TransactionContext)
  const [search, setSearch] = useState("")
  useEffect(() => {
    console.log("Refresh UI")
    console.log(transactions)
  }, [transactions])

  return (
    <div>
      <div className="mt-3 text-sm relative">
        <input
          type="text"
          className="w-full p-3 rounded bg-transparent border-b"
          placeholder="Search your items"
          onChange={e => {
            setSearch(e.target.value)
          }}
          value={search}
        />
        <button className="absolute top-1/2 transform -translate-y-1/2 right-2 text-gray-400 p-2">
          <FaSearch></FaSearch>
        </button>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold border-b pb-1 text-lg">Items</h3>
        <div className="">
          <div className="text-black transaction-list">
            {transactions.length > 0 ? (
              transactions
                .filter(value => {
                  if (search === "") {
                    return value
                  }
                  return value.name.toLowerCase().includes(search.toLowerCase())
                })
                .map((item, id) => (
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
      </div>
    </div>
  )
}
