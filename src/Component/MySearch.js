
  // Filter products based on search query and notify parent
  // useEffect(() => {
  //   const filteredProducts = products.filter((product) =>
  //     product.title.toLowerCase().includes(search.toLowerCase())
  //   );
  //   onFilter(filteredProducts);
  // }, [search, products, onFilter]);

import { useState, useEffect } from "react";

function MySearch({ products, onFilter }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const filteredProducts = products.filter((product) => {
      // تأكد أن product.title معرف وغير فارغ
      return product.title && product.title.toLowerCase().includes(search.toLowerCase());
    });
    onFilter(filteredProducts);
  }, [search, products, onFilter]);

  return (
    <>
    
      <div style={{position:'relative',zIndex:'100'}} className="form-floating m-5 fixed-top">
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
