// import { useEffect, useState } from "react";
// import axios from "axios";

// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
// import MyCard from "../../Component/MyCard";
// import MyTitle from "../../Component/MyTitle";

// function ProductsCategories() {

//   const [category, setCategory] = useState({});
//   const categories="https://fakestoreapi.com/products/categories";

//   useEffect(() => {
//     axios

//       .get(`https://fakestoreapi.com/products/categories${category}`)
//       .then((res) => {
//         console.log("from category", res.data);
//         setCategory(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);

//   return (
//     <>
//       <MyTitle head="Product Details" myColor="blue" />
//       <div className="row">
//           {categories.map((cat, index) => {
//             return (
//               <div className=" col-md-4 " key={index}>
//                 <MyCard
//                   width="18rem"
//                   image={cat.image}
//                   name={cat.title}
//                   url={`/details/${cat.id}`}
//                   btnName="View Details"
//                   movie={cat}
//                   product={cat}
//                   // cart="Add To Cart"
//                 />
//               </div>
//             );
//           })}
//         </div>
//     </>
//   );
// }

// export default ProductsCategories;
