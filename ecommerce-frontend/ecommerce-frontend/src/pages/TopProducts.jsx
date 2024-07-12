import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';

const TopProducts = ({ topN }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get(`http://localhost:3000/api/products/top/${topN}`);
      setProducts(response.data);
    };
    fetchProducts();
  }, [topN]);

  return (
    <div className="p-6">
      <ProductList products={products} />
    </div>
  );
};

export default TopProducts;
