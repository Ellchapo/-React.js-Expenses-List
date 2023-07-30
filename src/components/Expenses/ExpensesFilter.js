
import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const dropDownChangeHadler = (event) =>{
        props.onChangeFilter(event.target.value);

    }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropDownChangeHadler}>
          <option value='2023'>2023</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
          <option value='2022'>2022</option>
          <option value='2024'>2024</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
