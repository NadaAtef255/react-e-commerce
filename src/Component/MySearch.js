import { useState } from "react";

function MySearch() {
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="form-floating mb-3">
        <input
          type="text"
          name="search"
          value={search} // Bind input value to state
          className="form-control" // Bootstrap form control class
          id="nameInput" // Add an ID for accessibility
        />
        <label htmlFor="nameInput">Search For Product</label>
      </div>
    </>
  );
}
export default MySearch;
