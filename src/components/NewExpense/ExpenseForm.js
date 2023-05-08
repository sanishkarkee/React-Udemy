import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  //----useState is used to store all the values

  const [enteredTitle, setEnteredTitle] = useState(''); //----initially form empty cha so empty leko
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({  //----multiple state ko replace ma euta state banako
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // return ((prevState) => {
    //   setUserInput{...prevState, enteredTitle: event.target.value};
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // return ((prevState) => {
    //   setUserInput{...prevState, enteredAmount: event.target.value};
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // return ((prevState) => {
    //   setUserInput{...prevState, enteredDate: event.target.value};
    // });
  };

  //-------- FORM SUBMIT GARE PACHI SERVER MA SUBMIT HUNE DATA HARU --------
  const submitHandler = (event) => {
    //event ma form ma enter gareko data haru aaucha
    event.preventDefault(); //type = submit btn press garda page reload huncha so yo kura rokcha

    //---- data lai object ko rupp ma server ma pathako ho
    const expenseData = {
      title: enteredTitle, // A:B -> A ko name j rakhda ni huncha, B ko name chai mathi banako state variable ko name huncha
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //NEWEXPENSE.JS bata aako// yo function bata chai aba NewExpense.JS ma bhayeko same name ko function ma data pass huncha
    props.onSaveExpenseData(expenseData);

    // ---- Form submit bhaye pachi input field ko data lai clear garna use garicha ani <input> ma value attribute add garne ----
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  // jastai euta component ma bhayeko function/handler lai directly arko component ma call garna milcha ki mildaina?

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
