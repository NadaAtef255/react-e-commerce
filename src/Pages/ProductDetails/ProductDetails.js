import { useEffect, useState } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
// import MyCard from "../Cart/MyCard";
import MyTitle from "../../Component/MyTitle";
import './ProductDetails.css'
function ProductsDetails() {
  const [product, setProducts] = useState({});
  const params = useParams();
  console.log(params.id);

  useEffect(() => {
     axios .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => {
        console.log("from details", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
     
      {/* <MyCard
        name={product.title}
        image={product.image}
        bio={product.description}
        price={product.price}
        category={product.category}
        rate={product.rating.rate}
      /> */}
  <div className="product-card">
      <div className="background-image" style={{ backgroundImage: `url(${product.image})` }}>
        <div className="content-overlay">
          <div className="content">
            <h2 className="title">{product.title}</h2>
            <p className="description">{product.description}</p>
            <div className="info">
              <p className="category">{product.category}</p>
              <p className="price">${product.price}</p>
              {/* <p className="rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
            </div>
            <Link to='/home' className="btn-details">Back TO Home</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ProductsDetails;
