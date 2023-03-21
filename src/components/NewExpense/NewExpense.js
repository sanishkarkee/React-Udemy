import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  // yo parameter le ExpenseForm bata data receive garcha,parameter ko name j rakhda ni huncha
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //ExpenseForm.JS ko submit handler ma data kasari receive gareko cha yaha pani tei same name ra way use gareko ho
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
