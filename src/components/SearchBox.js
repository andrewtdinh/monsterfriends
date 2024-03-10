const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search" 
        placeholder="Filter Monsters"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;