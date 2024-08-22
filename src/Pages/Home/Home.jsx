import { useDispatch, useSelector } from "react-redux";
import MySearch from "../../Component/MySearch";
import { useEffect, useState } from "react";
import MyCard from "../../Component/Cart/MyCard";
import { getProducts } from "../../Redux/Actions/ProductsActions";
import "./Home.css";
function HomePage() {
  const products = useSelector((state) => state.myList.list);
  const lodingProduct = useSelector((state) => state.myList.lodingProduct);
  const dispatch = useDispatch();

  // const [category, setCategory] = useState({});
  // const getCategories = () => {
  //   fetch(`https://fakestoreapi.com/products/categories`)
  //     .then((res) => {
  //       console.log("from category", res.data);
  //       setCategory(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    dispatch(getProducts());
    // getCategories();
  }, [dispatch]);

  return (
    <>
      {lodingProduct ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem" ,marginRight:'5px' }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>

          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem" ,marginRight:'5px' }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>

          <div
            className="spinner-grow"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          {" "}
          <br />
          <MySearch products={allProducts} onFilter={handleFilter} />
          <div className=" mt-h8">
            <div className="row">
            {filteredProducts.map((product, index) => (
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
        </>
      )}
    </>
  );
}
export default HomePage;
