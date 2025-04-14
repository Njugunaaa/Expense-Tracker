import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import Search from "./components/Search";
import { ToastContainer,toast } from "react-toastify";
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
    toast.success("Expense has beeen deleted")
}
  return (
    <div className="p-6 text-black">
      <ToastContainer/>
  <h1 className="text-3xl font-bold mb-2">Expense Tracker</h1>
  <p className="mb-4 text-gray-600">
    Track Your Spending Anytime.
  </p>

  <div className='grid grid-cols-3 gap-6'>
    <div className='col-span-1 border p-4 bg-white rounded-lg shadow'>
      <Form onAddExpense={handleAddExpense} />
    </div>
    <div className="col-span-2 p-4 bg-white rounded-lg shadow">
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <br />
      <Table
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