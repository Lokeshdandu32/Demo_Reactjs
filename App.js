import './App.css';
import  Expenses from './Components/ExpensesDisplay'

function App() {
  const expenses = [
    {
      id: '1',
      title: 'Toliet Paper',
      amount: 94.12,
      date: new Date(2022, 1, 14),
    },
    {
      id: '2',
      title: 'Car Insurance',
      amount: 294.12,
      date: new Date(2022, 2, 14),
    },
    {
      id: '3',
      title: 'Tv',
      amount: 794.12,
      date: new Date(2022, 3, 14),
    },
    {
      id: '4',
      title: 'New Desk',
      amount: 494.12,
      date: new Date(2022, 4, 14),
    }
  ]
  return (
    <div>
      <Expenses title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
      <Expenses title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
      <Expenses title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
      <Expenses title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
    </div>
  );
}

export default App;
