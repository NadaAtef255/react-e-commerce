import { useDispatch, useSelector } from "react-redux";
import MySearch from "../../Component/MySearch";
import { useEffect, useState } from "react";
import MyCard from "../../Component/MyCard";
import { getProducts } from "../../Redux/Actions/ProductsActions";

function HomePage() {
  const products = useSelector((state) => state.myList.list);
  const dispatch = useDispatch();

  const [category, setCategory] = useState({});
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
      <br />
      <MySearch />
      <div className="container">
        <div className="row">
          {products.map((product, index) => {
            return (
              <div className=" col-md-4 " key={index}>
                <MyCard
                  width="18rem"
                  image={product.image}
                  name={product.title}
                  url={`/details/${product.id}`}
                  btnName="View Details"
                  movie={product}
                  product={product}
                  // cart="Add To Cart"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default HomePage;
