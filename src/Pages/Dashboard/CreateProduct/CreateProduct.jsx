//1- get categories
//2- make form for all inputs
//3- submit for and when success show toast 
import React, { useEffect, useState } from 'react';
import './CreateProduct.css';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom';
import { BASE_URL } from '../../../Servises/api';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const CreateProduct = () => {
  const history=useHistory()
  const [schema, setSchema] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    image: ''
  });
const {id}=useParams()
  const handleChange = (e) => {
    setSchema({ ...schema, [e.target.id]: e.target.value });    
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/products/${id}`)
      .then((res) => {
        setSchema({
          title: res.data.title,
          description: res.data.description,
          price: res.data.price,
          category: res.data.category,
          image: res.data.image
        })
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const addProduct = async (e) => {
    e.preventDefault();
    const method = id?"put":'post'
    const url = id?`${BASE_URL}/products/${id}`:`${BASE_URL}/products`
    try {
      const response = await axios[method](url, schema);
      toast.success(`Product ${id?'Updated':'created'} successfully!`);
      if(id){return history.push('/manage-products')}
      setSchema({
        title: '',
        description: '',
        price: '',
        category: '',
        image: ''
      })
    } catch (error) {
      toast.error(`Failed to ${id?'Updated':'created'} product`);
      console.error(error);
    }
  };

  return (
    <div className='create-product'>
      <form onSubmit={addProduct}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input 
         
            type="text" 
            className="form-control" 
            id="title" 
            placeholder="Enter product title" 
            value={schema.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input 
                   

            type="text" 
            className="form-control" 
            id="description" 
            placeholder="Enter product description" 
            value={schema.description}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Price</label>
          <input 
            type="number" 
           
            className="form-control" 
            id="price" 
            placeholder="Enter product price" 
            value={schema.price}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">Category</label>
          <select 
            className="form-select" 
            id="category" 
           
            value={schema.category}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="mens_clothing">Men's Clothing</option>
            <option value="womens_clothing">Women's Clothing</option>
          </select>
        </div>



        <div className="mb-3">
          <label htmlFor="image" className="form-label">image Image</label>
          <input 
            type="text" 
            className="form-control" 
            id="image" 
            placeholder="Enter image image https://img.com" 
            value={schema.image}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateProduct;
