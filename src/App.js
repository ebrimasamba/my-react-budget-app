import React from "react";
import { Layout } from "./components/Layout";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { SearchBar } from "./components/searchBar";
import Modal from "./components/modal";

import "./App.css";

function App() {
  return (
    <Layout>
      <div className="max-w-xl mx-auto">
        <Balance></Balance>
        <IncomeExpenses></IncomeExpenses>
        <SearchBar></SearchBar>
        <TransactionList></TransactionList>
        <AddTransaction></AddTransaction>
      </div>
      {/* <Modal></Modal> */}
    </Layout>
  );
}

export default App;
