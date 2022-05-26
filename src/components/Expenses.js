import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilters/ExpensesFilter";

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

  const hasItem = filterdItems.length === 0;
  console.log(hasItem);
  return (
    <div>
      <div className="expenses">
        <ExpensesFilter
          selectedDefaultYear={filteredYear}
          onChangFilterYear={filterChangeHandler}
        />
        {hasItem && <p>Not expenses found.</p>}
        {!hasItem &&
          filterdItems.map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
      </div>
    </div>
  );
}

export default Expenses;
