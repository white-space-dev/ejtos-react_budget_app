import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, newExpense) => total += newExpense.cost, 0)
    console.log('totalExpenses', totalExpenses)
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value > 20000) {
            alert(`The value cannot exceed remaining funds £20000`)
            return;
        } else if (event.target.value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending")
            return;
        } else {
            setNewBudget(event.target.value);
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
