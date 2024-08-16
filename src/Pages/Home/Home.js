// import { useDispatch, useSelector } from "react-redux";
// import MySearch from "../../Component/MySearch";
// import { useContext, useEffect, useState } from "react";
// import MyCard from "../../Component/Cart/MyCard";
// import { getProducts } from "../../Redux/Actions/ProductsActions";
// import "./Home.css";
// import { CategoriesContext } from "../../Context/CategoriesContext";
// import axios from "axios";
// function HomePage({ filteredProducts }) {
//   // redux thunk
//   // const products = useSelector((state) => state.myList.list);
//   const dispatch = useDispatch();

//   // const [category, setCategory] = useState({});

//   // categ context
//   const { category } = useContext(CategoriesContext);
//   console.log(category, "cat");

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     let apiUrl;
//     if (!category) {
//       apiUrl = `https://fakestoreapi.com/products`;
//     } else {
//       apiUrl = `https://fakestoreapi.com/products/category/${category}`;
//     }
//     // fetch(apiUrl)
//     //   .then((response) => console.log(response.json()))
//     //   .then((data) => setProducts(data.results));
//     const fetchCategories = async () => {
//       const response = await axios.get(apiUrl);
//       setProducts(response.data);
//       console.log(response);
//       if (filteredProducts) {
//         setProducts(filteredProducts);
//       }
//     };
//     fetchCategories();
//   }, [category, products]);

//   useEffect(() => {
//     dispatch(getProducts());
//     // getCategories();
//   }, [dispatch]);
//   return (
//     <>
//       <br />
//       <MySearch />
//       <div className=" mt-h8">
//         <div className="row">
//           {products.map((product, index) => {
//             return (
//               <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
//                 <MyCard
//                   width="18rem"
//                   image={product.image}
//                   name={product.title}
//                   url={`/details/${product.id}`}
//                   btnName="View Details"
//                   movie={product}
//                   product={product}
//                   // cart="Add To Cart"
//                 />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// }
// export default HomePage;

//////////////////////////////////////////////////////////////// chat
// import { useDispatch, useSelector } from "react-redux";
// import { useContext, useEffect, useState } from "react";
// import MySearch from "../../Component/MySearch";
// import MyCard from "../../Component/Cart/MyCard";
// import { getProducts } from "../../Redux/Actions/ProductsActions";
// import "./Home.css";
// import { CategoriesContext } from "../../Context/CategoriesContext";
// import axios from "axios";
// import { PriceContext } from "../../Context/PriceContext";

// function HomePage() {
//   const dispatch = useDispatch();
//   const { category } = useContext(CategoriesContext);
//   const { price } = useContext(PriceContext);

//   // Store the complete product list and the filtered list
//   const [allProducts, setAllProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [sortOrder, setSortOrder] = useState("");

//   // Fetch products based on the selected category
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const apiUrl = category
//         ? `https://fakestoreapi.com/products/category/${category}`
//         : `https://fakestoreapi.com/products`;

//       const response = await axios.get(apiUrl);
//       setAllProducts(response.data);
//       setFilteredProducts(response.data);
//     };

//     fetchProducts();
//   }, [category]);

//   // Handle the search filtering and update filteredProducts
//   const handleFilter = (filtered) => {
//     setFilteredProducts(filtered);
//   };

//   useEffect(() => {
//     const sortedProducts = [...filteredProducts].sort((a, b) => {
//       if (price === "asc") {
//         return a.price - b.price;
//       } else if (price === "desc") {
//         return b.price - a.price;
//       }
//       return 0;
//     });

//     setFilteredProducts(sortedProducts);
//   }, [price, filteredProducts]);

//   return (
//     <>
//       <br />
//       <MySearch products={allProducts} onFilter={handleFilter} />
//       <div className="mt-h8">
//         <div className="row">
//           {filteredProducts.map((product, index) => (
//             <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
//               <MyCard
//                 width="18rem"
//                 image={product.image}
//                 name={product.title}
//                 price={product.price}
//                 url={`/details/${product.id}`}
//                 btnName="View Details"
//                 product={product}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default HomePage;

// import { useContext, useEffect, useState } from "react";
import MySearch from "../../Component/MySearch";
import MyCard from "../../Component/Cart/MyCard";
import "./Home.css";
import { CategoriesContext } from "../../Context/CategoriesContext";
import axios from "axios";
import { PriceContext } from "../../Context/PriceContext";
import { useContext, useEffect, useState } from "react";

function HomePage() {
  const { category } = useContext(CategoriesContext);
  const { price } = useContext(PriceContext);

  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Fetch products when the category changes
  useEffect(() => {
    const fetchProducts = async () => {
      //category/
      const apiUrl = category
        ? `https://my-shop-hossam.glitch.me/products/${category}`
        : `https://my-shop-hossam.glitch.me/products`;

      const response = await axios.get(apiUrl);
      const products = response.data;
      setAllProducts(products); // Store fetched products
      setFilteredProducts(products); // Initialize filtered products
    };

    fetchProducts();
  }, [category]);

  // Sort products when price changes
  useEffect(() => {
    const sortedProducts = [...allProducts].sort((a, b) => {
      if (price === "asc") {
        return a.price - b.price;
      } else if (price === "desc") {
        return b.price - a.price;
      }
      return 0;
    });
    setFilteredProducts(sortedProducts);
  }, [price, allProducts]); // Effect depends on price and allProducts

  // Handle the search filtering and update filteredProducts
  const handleFilter = (filtered) => {
    setFilteredProducts(filtered);
  };

  return (
    <>
      <br />
      <MySearch products={allProducts} onFilter={handleFilter} />
      <div className="mt-h8">
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
  );
}

export default HomePage;
