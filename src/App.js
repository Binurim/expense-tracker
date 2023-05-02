import './App.css';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 18) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses expenses={expenses}/>
    </div>
  );
}

export default App;
