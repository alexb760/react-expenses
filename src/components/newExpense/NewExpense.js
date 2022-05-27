import { useState } from "react";
import NewExpenseForm from "./NewExpenseFrom";
import "./NewExpense.css";

const NewExpenses = (props) => {
  const [isAddingAction, setIsAddingAction] = useState(false);

  const isAddingActionHandler = () => {
    setIsAddingAction(true);
  };

  const isCancelingActionHandler = () => {
    setIsAddingAction(false);
  };

  //passing data from child to parent.
  // we pass a function that take args and map into the owner component.
  const saveExpenseDataInput = (inputData) => {
    const expenseData = {
      ...inputData,
      id: Math.random().toString(),
    };
    props.onSaveExpenseItem(expenseData);
    isCancelingActionHandler();
  };
  // now we can work with this function inside the child component.
  //<NewExpenseForm onSaveExpenseData={saveExpenseDataInput} />
  return (
    <div className="new-expense">
      {!isAddingAction && (
        <button onClick={isAddingActionHandler}> Add new expense</button>
      )}
      {isAddingAction && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataInput}
          onCancel={isCancelingActionHandler}
        />
      )}
    </div>
  );
};

export default NewExpenses;
