import { useEffect, useState } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
// import MyCard from "../Cart/MyCard";
import MyTitle from "../../Component/MyTitle";
import './ProductDetails.css'
import { BASE_URL } from "../../Servises/api";
function ProductsDetails() {
  const [product, setProducts] = useState({});
  const { id } = useParams();

  useEffect(() => {
     axios .get(`${BASE_URL}/products/${id}`)
      .then((res) => {
        console.log("from details", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {product && (
        <>
          <div className="product-card">
            <div
              className="background-image"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              <div className="content-overlay">
                <div className="content">
                  <h2 className="title">{product.title}</h2>
                  <p className="description">{product.description}</p>
                  <div className="info">
                    <p className="category">{product.category}</p>
                    <p className="price">${product.price}</p>
                    {/* <p className="rating">Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
                  </div>
                  <Link to="/home" className="btn-details">
                    Back TO Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductsDetails;
