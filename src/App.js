import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 200,
      date: new Date(2022, 0, 24),
    },
    {
      id: "e2",
      title: "Medical",
      amount: 300,
      date: new Date(2022, 1, 24),
    },
    {
      id: "e3",
      title: "Party",
      amount: 100,
      date: new Date(2022, 2, 24),
    },
    {
      id: "e4",
      title: "Food",
      amount: 250,
      date: new Date(2022, 3, 24),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default App;
