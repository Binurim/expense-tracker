import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    { id:1, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
    { id:2, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
    { id:3, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
    { id:4, title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  };
  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
