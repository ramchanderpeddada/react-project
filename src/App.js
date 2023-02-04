import React from "react";
import "./App.css";
import AddTransaction from "./Components/AddTransaction";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpense from "./Components/IncomeExpense";
import TransactionList from "./Components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
