import { useState } from "react";
import ExpensesFilter from "./ExpensesFilters/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  //Getting filter Selection from child ExpensesFilter.
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterdItems = props.expenses.filter(
    (item) => item.date.getFullYear() === parseInt(filteredYear, 0)
  );

  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selectedDefaultYear={filteredYear}
          onChangFilterYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filterdItems} />
        <ExpensesList items={filterdItems} />
      </div>
    </div>
  );
}

export default Expenses;
