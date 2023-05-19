import React from "react";
import "./Todo.css"
const ExpenseChart = ({ expenses }) => {
  
  return (
    <div>
      <div className="filter">
        <h2>Filter by year</h2>
        <select >
          <option value="All">All</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
      {/* --------Chart------ */}
      <div className="chart">
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Jan</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill" ></div>
            </div>
            <h5>Feb</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Mar</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Apr</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>May</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Jun</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Jul</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Aug</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Sep</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Oct</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Nov</h5>
        </div>
        <div className="chart-bar">
            <div className="chart-bar-inner">
              <div className="chart-bar-fill"></div>
            </div>
            <h5>Dec</h5>
        </div> 
      </div>     
    {/* -------End Chart-------- */}
      
    </div>
    
    
  );
};

const ExpenseList = ({ expenses }) => {
  
  return (
    <div>
      <ul className="expense-list">
      {expenses.map((expense, index) => (
        <li key={index}>
          <div className="card expense-item">
            <div className="expense-date">
              <div className="expense-date-month">{expense.date.toLocaleString('en-US', { month: 'long' })}</div>
              <div className="expense-date-year">{expense.date.getFullYear()}</div>
              <div className="expense-date-day">{expense.date.getDate()}</div>
            </div>
            <div className="expense-item-desc">
              <h2>{expense.title}</h2>
              <div className="expense-item-price">
                ${expense.amount}
              </div>
            </div>
          </div>
          
        </li>
      ))}
    </ul>
    </div>
  );
};

const ResultExpense = ({ expenses }) => {
  return (
    <div className="ResultExpense">
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default ResultExpense;
