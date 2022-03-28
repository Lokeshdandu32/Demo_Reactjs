import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpensesDisplay(props) {
    return (
        <div>
            <ExpenseItem title={props.title} date={props.date} amount={props.amount} />
        </div>
    );
}

export default ExpensesDisplay;