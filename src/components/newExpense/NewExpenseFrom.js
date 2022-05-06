import { useState } from "react";
import "./ExpenseForm.css";
const NewExpenseForm = () => {
  // const [userInput, setUserInput] = useState({
  //   titleInput: "",
  //   amoundInput: "",
  //   dateInput: "",
  // });

  //Opcion 3: individual statates.
  const [titleInput, setTitleInput] = useState("");
  const [amoundInput, setAmoundInput] = useState("");
  const [DateInput, setDateInput] = useState("");

  const titleChangeHandler = (event) => {
    // Keep in mind this approach is no recomended, it will work most of the cases though.
    // But since React schedule state changes it won't garante that you will get latest snapshot of the state.
    // Opcion 1: no recomended.
    // -> setUserInput({ ...userInput, titleInput: event.target.value });
    // Option 2: recomended
    // React will garante you will get latest snapshot of the state.
    //  -> setUserInput((prevState) => {
    // ->   return { ...prevState, titleInput: event.target.value };
    //  -> });
    //Option 3: is handle individual state for each input declarin separatly.
    setTitleInput(event.target.value);
  };

  const amountChangeHandler = (event) => {
    // setUserInput({ ...userInput, amoundInput: event.target.value });
    setAmoundInput(event.target.value);
  };

  const dateChangeHandler = (event) => {
    // setUserInput({ ...userInput, dateInput: event.target.value });
    setDateInput(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title: </label>
          <input type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount: </label>
          <input type="number" min="0.0" step="1" />
        </div>
        <div className="new-expense__control">
          <label>Date: </label>
          <input type="date" />
        </div>
        <div className="new-expense__actions">
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default NewExpenseForm;
