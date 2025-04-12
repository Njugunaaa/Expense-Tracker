import { useState } from "react";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import SearchBar from "./components/SearchBar";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  

  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  
//The search function(predictate function)
const filteredExpenses=expenses.filter((expense)=>{
return expense.expenseName.toLowerCase().includes(searchTerm.toLowerCase()) ||  expense.description.toLowerCase().includes(searchTerm.toLowerCase());
});

//advanced deliverables
//sorting by category
const sortBy=(columnName)=>{
const sortedData=[...expenses].sort((a,b)=>{
    return a[columnName].toLowerCase().localeCompare(b[columnName].toLowerCase());//sorted alphabetically 
})
setExpenses(sortedData); 
}

const handleDelete=(indexToDelete)=>{
    const updatedData=expenses.filter((_,index)=>index!==indexToDelete);
    setExpenses(updatedData);
    
}
  return (
    <div className="App">
      <h1>Expense Tracker 💸</h1>
      <p>Start taking control of your finances and life,Record,Categorize and analyze your spending</p>
      <div className="main-layout">
        <br />
      <div className="left-column">
        </div>
      <div className="middle-column">
       <ExpenseForm onAddExpense={handleAddExpense} />
        </div>
        <div className="right-column">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} /><br /><br />
          <ExpenseTable
            expenses={filteredExpenses}
            onSort={sortBy}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default App;