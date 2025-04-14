import React, { useState } from "react";
import { toast } from "react-toastify";

function Form({ onAddExpense }) {
  const [expenseName, setExpenseName] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (expenseName && description && amount && category && date) {
      onAddExpense({ expenseName, description, amount, category, date });

      setExpenseName("");
      setDescription("");
      setAmount("");
      setCategory("");
      setDate("");
      toast.success("You have added an expensee!!!!")
    } else {
      toast.error("Please fill out all fields");
    }
  };

  return (
    <>
      <div className="bg-orange-300 shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit} className="flex max-w-md flex-col gap-4">
          <h2 className="text-xl font-bold mb-2">Add Expense</h2>
          <h4 className="text-gray-600 mb-4">Enter your expense details below</h4>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter expense name"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}

            />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"

              placeholder="Enter expense description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"

              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter expense category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}

            />
          </div>
          <div>
            <input
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              value={date}
              onChange={(e) => setDate(e.target.value)}

            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Form;
