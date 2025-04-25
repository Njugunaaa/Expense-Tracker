
function Search({ searchTerm, onSearch }) {
  return (
    <div className="relative">
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border bg-gray-50"
        placeholder="Search expenses..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;
