import React, { useState, useEffect, useContext, useCallback } from "react";
import axios from "axios";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions/ProductsActions";
import MySearch from "../../Component/MySearch";
import MyCard from "../../Component/Cart/MyCard";
import { CategoriesContext } from "../../Context/CategoriesContext";
import { PriceContext } from "../../Context/PriceContext";
import { UserContext } from "../../Context/UserContext";
import Dashboard from "../Dashboard/Dashboard";
import "./Home.css";

function HomePage() {
  const { category } = useContext(CategoriesContext);
  const { price } = useContext(PriceContext);
  const { userData } = useContext(UserContext);
  const loadingProduct = useSelector((state) => state.myList.loadingProduct);
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const isAdmin =
    userData?.email?.toLowerCase() === "hossamnada@gmail.com" ||
    localStorage.getItem("userEmail") === "hossamnada@gmail.com";
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 5;

  const indexOfLastProduct = currentPage * perPage;
  const indexOfFirstProduct = indexOfLastProduct - perPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(filteredProducts.length / perPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const apiUrl = category
        ? `https://my-shop-hossam.glitch.me/products?category=${category}`
        : `https://my-shop-hossam.glitch.me/products`;
      const response = await axios.get(apiUrl);
      const products = response.data;
      setAllProducts(products);
      setFilteredProducts(products);
    };

    fetchProducts();
  }, [category]);

  useEffect(() => {
    if (price) {
      const sortedProducts = [...allProducts].sort((a, b) =>
        price === "asc" ? a.price - b.price : b.price - a.price
      );
      setFilteredProducts(sortedProducts);
    }
  }, [price, allProducts]);

  const handleFilter = useCallback((filtered) => {
    setFilteredProducts(filtered);
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      {isAdmin ? (
        <Dashboard />
      ) : (
        <>
          {loadingProduct ? (
            <div className="spinner-container">
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
              <div className="spinner-grow" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <>
              <br />
              <MySearch products={allProducts} onFilter={handleFilter} />
              <div className="mt-h8">
                <div className="row">
                  {currentProducts.map((product, index) => (
                    <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
                      <MyCard
                        width="18rem"
                        image={product.image}
                        name={product.title}
                        price={product.price}
                        url={`/details/${product.id}`}
                        btnName="View Details"
                        product={product}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="pagination-container">
                <Pagination>
                  {Array.from({ length: totalPages }, (_, index) => (
                    <Pagination.Item
                      key={index + 1}
                      active={index + 1 === currentPage}
                      onClick={() => handlePageChange(index + 1)}
                    >
                      {index + 1}
                    </Pagination.Item>
                  ))}
                </Pagination>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default HomePage;
