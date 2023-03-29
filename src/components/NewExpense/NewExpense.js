import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // yo parameter le ExpenseForm bata data receive garcha,parameter ko name j rakhda ni huncha
  const saveExpenseDataHandler = (enteredExpenseData) => {
    //ExpenseForm.JS ko submit handler ma data kasari receive gareko cha yaha pani tei same name ra way use gareko ho, yo chai OBJECT banako ho
    const expenseData = {
      ...enteredExpenseData, //yesle chai ja bata data aaunu parne ho tya bata sabai key:value pair yeta tancha
      id: Math.random().toString(),
    };

    // APP.JS bata aako ho//yesle NewExpense.js bata aako data lai APP.JS ma pass garcha
    props.onAddExpense(expenseData);
  };
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
