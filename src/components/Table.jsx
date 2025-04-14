
function Table({ expenses, onSort, onDelete }) {
  return (
    <div>
      <table className="w-full text-sm text-left  text-gray-500">
        <thead className="text-medium text-white  bg-blue-600 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              <button className="font-semibold">Expense</button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button onClick={() => onSort("description")} className="font-semibold flex items-center hover:underline">
                Description &#8595;&#8593;
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button className="font-semibold">Amount</button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button onClick={() => onSort("category")} className="font-semibold flex items-center hover:underline">
                Category &#8595;&#8593;
              </button>
            </th>
            <th scope="col" className="px-6 py-3">
              <button className="font-semibold">Action</button>
            </th>
          </tr>
        </thead>
        <tbody className="bg-pink-900">
          {expenses.map((expense, index) => (
            <tr key={index} className="bg-white border-b text-black-500">
              <td className="px-6 py-4 font-medium text-black-900">{expense.expenseName}</td>
              <td className="px-6 py-4">{expense.description}</td>
              <td className="px-6 py-4">${expense.amount}</td>
              <td className="px-6 py-4">{expense.category}</td>
              <td className="px-6 py-4 r">
                <button onClick={() => onDelete(index)} className="bg-black-700 flex items-center font-medium text-red-600 hover:underline">
                  &#10008;

                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
