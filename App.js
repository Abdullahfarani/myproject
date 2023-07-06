
import Expenses from './Components/Expenses/Expenses';
import React, { useState } from 'react';
import NewExpenses from './Components/NewExpenses/NewExpenses';

let Dummy_Expense = [
    {
        id: 'e1',
        title: "School fee",
        amount: 350,
        date: new Date(2021, 5, 23)
    },
    {
        id: 'e2',
        title: "Books",
        amount: 450,
        date: new Date(2022, 5, 23)
    },
    {
        id: 'e3',
        title: "Annual fee",
        amount: 550,
        date: new Date(2023, 5, 23)
    },
    {
        id: 'e4',
        title: "Semester fee",
        amount: 650,
        date: new Date(2024, 5, 23)
    }

];


const App = () => {
    
    const [expenses, setExpenses] = useState(Dummy_Expense);

    const addExpenseHandler = (expense) => {
        const updateExpense = [expense, ...expenses];
        setExpenses(updateExpense);

    };
    return (
        <div>
            <NewExpenses onAddExpense = {addExpenseHandler} />
            <Expenses item= { expenses } />
      </div>
    );
}

export default App;