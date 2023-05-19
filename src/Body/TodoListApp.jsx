import React, { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";
import ResultExpense from "./ResultExpense";

const TodoListApp = () => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <AddExpenseForm onAddExpense={addExpense} />
      <ResultExpense expenses={expenses}/>

    </div>
  );
};

export default TodoListApp;
