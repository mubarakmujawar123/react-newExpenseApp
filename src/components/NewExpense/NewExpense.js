import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const saveFormDataHandler = (expense) => {
    props.onAddExpense(expense);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveFormData={saveFormDataHandler} />
    </div>
  );
};

export default NewExpense;
