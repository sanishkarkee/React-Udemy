import React, { useState } from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

// NOTE: Expensefilter.js bata data lai Expense.js ma lyaim aba chai tyo aako data lai chai state ma save garnu parcha, so use state use gareko ho

const Expenses = (props) => {
  // ExpenseFilter.js bata aako data lai store garna lai STATE use gareko yaha
  const [filteredYear, setFilteredYear] = useState('2020');

  // filterChangeHandler handler chai child component(ExpenseFilter) bata data pull garna lai use gareko ho
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear, 'This data are after filtering'); //yo chai state ma data store gareko ho
    // console.log('We are in Expenses.js');
    // console.log(selectedYear);
  };

  //------------(Video 65/assignment 3)---FILTERING ITEMS ON THE BASIS OF SELECTION OF YEAR
  console.log(props.items, 'This is for filtered items'); // container (id,title,amount,date) of all expense items
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
    // expense.date.getFullYear().toString() >> yesle chai sabai expense data haru ko year collect garcha
  });

  console.log(filteredExpenses.length); //selected year ma kati ota data cha tyo determine garcha

  // -----CONDITIONAL OUTPUT 2 ----
  // (--code is moved to new component=> ExpensesList.js--)

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear} //dropdown ma default 2022 cha tara usestate('2020')cha default
          onChangeFilter={filterChangeHandler}
        />
        {/*-----------DATA LAI MANUALLY EK EK GARDAI DEKHAUNU BHANDA DYNAMICALLY EKAI PALTA DISPLAY HO----*/}
        {/* App.js ma bhayeko (expenses array object) ma bhayeko harek data lai <ExpenseItem/>  ma pass garcha ,yesma function ko arguement (expense) ma data pass huncha tei expense arguement lai milaune ho*/}
        {/* ---------- YESMA 2TA KAAM BHAKO CHA
        1) data lai dynamically ekai palta MAP() use garera dekhako cha=> "{props.items.map((expense) => ()"
        2) selected year ko aadhar ma expense item dekhako cha => "{filteredExpenses.map((expense) => ("*/}

        {/* -----CONDITIONAL OUTPUT 1----
        {filteredExpenses.length === 0 && <p>No expense found.</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>

        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
