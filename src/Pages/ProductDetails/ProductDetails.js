import { useEffect, useState } from "react";
import axios from "axios";

import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import MyCard from "../../Component/MyCard";
import MyTitle from "../../Component/MyTitle";

function ProductsDetails() {
  const params = useParams();
  console.log(params.id);
  const [product, setProducts] = useState({});

  useEffect(() => {
    axios

      .get(`https://fakestoreapi.com/products/${params.id}`)
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
      <MyTitle head="Product Details" myColor="blue" />
      <MyCard
        name={product.title}
        image={product.image}
        bio={product.description}
        price={product.price}
        category={product.category}
        rate={product.rate}
      />
    </>
  );
}

export default ProductsDetails;
