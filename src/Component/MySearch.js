import { useState, useEffect } from "react";
import MyCard from "./Cart/MyCard";

function MySearch({ products, onFilter }) {
  const [search, setSearch] = useState("");

  // Handle search input changes
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Filter products based on search query and notify parent
  useEffect(() => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(search.toLowerCase())
    );
    onFilter(filteredProducts);
  }, [search, products, onFilter]);

  return (
    <>
      <div className="form-floating m-5 fixed-top">
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
          className="form-control"
          id="nameInput"
          placeholder="Search for Product"
        />
        <label htmlFor="nameInput">Search For Product</label>
      </div>
    </>
  );
}

export default MySearch;
