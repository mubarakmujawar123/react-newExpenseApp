import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveFormDataHandler = (expense) => {
    props.onAddExpense(expense);
    setIsEditing(false);
  };
  const startFormEditing = () => {
    setIsEditing(true);
  };
  const stopFormEditing = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startFormEditing}>Add new expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onCancle={stopFormEditing}
          onSaveFormData={saveFormDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
