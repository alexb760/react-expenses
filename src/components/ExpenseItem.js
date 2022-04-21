// We need to import a named function useState.
// We use useState when need to handler acction from the user UI.
import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  //lerning about useState Hook.
  // 1. We define our statae passing the property we want to handle.
  // this can be an object too.
  const [title, setTitle] = useState(props.title);
  //2. Creates a handler functions,
  // this function can not be aoutside the react component
  const titleHandler = () => {
    setTitle("Update!");
    console.log(title);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h1>{title}</h1>
        <div className="expense-item__price">{props.amount}</div>
        <button onClick={titleHandler}>Update</button>
      </div>
    </div>
  );
}

export default ExpenseItem;
