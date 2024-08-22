import { useEffect, useState } from "react";
import axios from "axios";
import MyTitle from "../../Component/MyTitle";
import { BASE_URL } from "../../Servises/api";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import MyCard from "../../Component/Cart/MyCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/Actions/ProductsActions";

function ProductsCategories() {
    const [products, setProducts] = useState([]);
    const { type } = useParams();
    const lodingProduct = useSelector((state) => state.myList.lodingProduct);
    const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get(`${BASE_URL}/products?category=${type}`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [type]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  return (
    <>
      <MyTitle head={`${type} Products`} myColor="blue" />
      <div className="row">{lodingProduct? 
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
        </div>:<>{products.map((product) => {
            return (
              <div className="col-md-4" key={product.id}>
                <MyCard
                  width="18rem"
                  image={product.image}
                  name={product.title}
                  url={`/details/${product.id}`}
                  btnName="View Details"
                  movie={product}
                  product={product}
                />
              </div>
            );
          })}</>}
          
        </div>
    </>
  );
}

export default ProductsCategories;
