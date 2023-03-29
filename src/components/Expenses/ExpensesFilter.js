import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  //Expenses.JS(PARENT) ma ExpenseFilter(CHILD) component use bhako cha so, ExpensesFilter ma props
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value); //event.target.value ma data stored bhako cha, "onChangeFilter" chai Expenses.js ko < ExpensesFilter > component ma as a parameter pass bhako cha so yo "onChangeFilter" hamile ExpenseFilter.js ma ni use garna pauchau
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        {/* by default dropdown ma hamro default value 2022 cha tara Expense.js ko usestate('2020') default value cha,,so yo usestate ko value as a default set garna value={props.selected } use gareko ho */}
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
