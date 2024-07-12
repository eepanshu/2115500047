import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-1"><span className="font-medium">Price:</span> ${product.price}</p>
      <p className="text-gray-600 mb-1"><span className="font-medium">Rating:</span> {product.rating}</p>
      <p className="text-gray-600 mb-1"><span className="font-medium">Discount:</span> {product.discount}%</p>
      <p className="text-gray-600"><span className="font-medium">Availability:</span> {product.availability}</p>
    </div>
  );
};

export default ProductCard;
