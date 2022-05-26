import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpenses from "./components/newExpense/NewExpense";

import "./App.css";

import { DUMMY_DATA } from "./data/dummy";

function App() {
  const [expensesItems, setExpensesItems] = useState(DUMMY_DATA);

  const saveNewExpenseData = (dataInput) => {
    setExpensesItems((prevExpeses) => {
      return [dataInput, ...prevExpeses];
    });
  };

  return (
    <div>
      <NewExpenses onSaveExpenseItem={saveNewExpenseData} />
      <Expenses expenses={expensesItems} />
    </div>
  );
}

export default App;
