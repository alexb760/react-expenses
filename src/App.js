import Expenses from "./components/Expenses";
import NewExpenses from "./components/newExpense/NewExpense";
import "./App.css";

function App() {
  //Passing data througth props.
  let expensesItems = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const saveNewExpenseData = (dataInput) => {
    console.log(expensesItems);
  };
  return (
    <div>
      <NewExpenses onSaveExpenseItem={saveNewExpenseData} />
      <Expenses expenses={expensesItems} />
    </div>
  );
}

export default App;
