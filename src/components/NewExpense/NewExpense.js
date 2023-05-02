import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // yo parameter le ExpenseForm bata data receive garcha,parameter ko name j rakhda ni huncha

  const [isEditing, setIsEditing] = useState(false); //(Assignment-4) yesle chai FORM shoe garne ki ma garne bhanne decide garcha

  const saveExpenseDataHandler = (enteredExpenseData) => {
    //ExpenseForm.JS ko submit handler ma data kasari receive gareko cha yaha pani tei same name ra way use gareko ho, yo chai OBJECT banako ho
    const expenseData = {
      ...enteredExpenseData, //yesle chai ja bata data aaunu parne ho tya bata sabai key:value pair yeta tancha
      id: Math.random().toString(),
    };

    // APP.JS bata aako ho//yesle NewExpense.js bata aako data lai APP.JS ma pass garcha
    props.onAddExpense(expenseData);
    setIsEditing(false); //--form submit bhaye pachi form lai close garna lai
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  // -- stopEditingHandler() lai ExpenseForm.js ko cancel button ma pass gariyeko cha
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {/* if isEditing FALSE cha bhane BUTTON show garne */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {/* If isEditing TRUE cha bhane FORM show garne */}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
