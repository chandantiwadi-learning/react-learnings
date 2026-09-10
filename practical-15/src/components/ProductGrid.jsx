import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, onViewDetails }) => {
  if (!products || products.length === 0) {
    return (
      <div className="empty-state">
        <h2>No products found.</h2>
        <p>Try adjusting your search query.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onViewDetails={onViewDetails} 
        />
      ))}
    </div>
  );
};

export default ProductGrid;
