import React from 'react';

const ProductPage = ({ product }) => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{product.productName}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>Discount: {product.discount}%</p>
      <p>Availability: {product.availability}</p>
    </div>
  );
};

export default ProductPage;

