import React from "react";
import NewExpenseForm from "./NewExpenseFrom";
import "./NewExpense.css";

const NewExpenses = (props) => {
  //passing data from child to parent.
  // we pass a function that take args and map into the owner component.
  const saveExpenseDataInput = (inputData) => {
    const expenseData = {
      ...inputData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseItem(expenseData);
  };
  // now we can work with this function inside the child component.
  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={saveExpenseDataInput} />
    </div>
  );
};

export default NewExpenses;
