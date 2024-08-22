//1- get categories
//2- get all products and show 
//3- when click on delete handle delete
//4- when click on update will open modal inside it ( create form ) and fill data with old data




import React, { useEffect, useState } from 'react';
import MyCard from '../../../Component/Cart/MyCard';
import axios from 'axios';
import { getProducts } from '../../../Redux/Actions/ProductsActions';
import { useDispatch } from 'react-redux';

const ManageProducts = () => {
  const [allProduct, setAllProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`https://my-shop-hossam.glitch.me/products`);
        setAllProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [allProduct]);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="row">
      {allProduct.map((product) => (
        <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
          <MyCard
            width="18rem"
            image={product.image}
            name={product.title}
            price={product.price}
            btnDeleteDash="delete"
            btnUpdatDash="Update"
            productFromDash={product}
          />
        </div>
      ))}
    </div>
  );
};

export default ManageProducts;
