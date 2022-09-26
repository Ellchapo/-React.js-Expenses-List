import './ExpenseForm.css';
import React,{ useState } from 'react';
function ExpenseForm(props){
 const [enteredTitle,setEnteredTitle]= useState('');
 const [enteredAmount,setEnteredAmount]= useState('');
 const [enteredDate,setEnteredDate]= useState('');

 function titleChangeHandler(event){
  setEnteredTitle(event.target.value);
 };
 function amountChangeHandler(event){
    setEnteredAmount(event.target.value);
   };
   function dateChangeHandler(event){
    setEnteredDate(event.target.value);
   };

   function submitHandler(event){
      event.preventDefault();
      const expenseData = {
          title: enteredTitle,
          amount: +enteredAmount,
          date: new Date(enteredDate)
      };
      props.onSaveExpenseData(expenseData);
      setEnteredTitle('');
      setEnteredDate('');
      setEnteredAmount('');
   };
    return(
        <form onsSubmit={submitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <lable>Title</lable>
                <input type='text' value={enteredTitle} onChange= {titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <lable>Amount</lable>
                <input type='number' min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <lable>Date</lable>
                <input type='date' min="2019-01-01" step="2022-01-01" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.onCancel}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};
export default ExpenseForm;