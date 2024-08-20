import { useState } from "react";

function MySearch() {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };

  return (
    <>
    
      <div className="form-floating m-5 fixed-top">
        <input
          type="text"
          name="search"
          value={search} 
          onChange={(e) => handleSearch(e)}
          className="form-control" 
          id="nameInput"
        />

        <label htmlFor="nameInput">Search For Product</label>
      </div>
    </>
  );
}
export default MySearch;
