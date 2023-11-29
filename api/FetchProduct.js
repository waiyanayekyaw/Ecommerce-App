import axios from 'axios';
import React, {useState, useEffect} from 'react';

const FetchProduct = () => {
  const [products, setProducts] = useState([]);
  const [singleProduct, setSingleProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const baseUrl = 'https://dummyjson.com/products';

  const getAllProducts = () => {
    axios({
      method: 'get',
      url: `${baseUrl}`,
    })
      .then(response => {
        setProducts(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  const getSingleProducts = () => {
    axios({
      method: 'get',
      url: `${baseUrl}/1`,
    })
      .then(response => {
        setSingleProduct(response.data);
        // console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  const getAllCategories = () => {
    axios({
      method: 'get',
      url: `${baseUrl}/categories`,
    })
      .then(response => {
        setCategories(response.data);
        // console.log(response.data[0]);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);
};

export default FetchProduct;
