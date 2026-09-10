import React from 'react';

const ProductDetails = ({ product, onBack }) => {
  if (!product) return null;

  return (
    <div className="product-details-container">
      <button className="back-btn" onClick={onBack}>
        &larr; Back to Products
      </button>
      
      <div className="product-details-content">
        <div className="product-details-image">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        
        <div className="product-details-info">
          <span className="product-category">{product.category}</span>
          <h2>{product.title}</h2>
          <p className="product-brand">Brand: {product.brand || 'N/A'}</p>
          
          <div className="product-meta-large">
            <span className="product-price">${product.price}</span>
            {product.discountPercentage > 0 && (
              <span className="discount-badge">-{Math.round(product.discountPercentage)}%</span>
            )}
            <span className="product-rating">⭐ {product.rating}</span>
          </div>
          
          <p className="product-stock">Status: {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}</p>
          
          <div className="product-description-full">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <p className="product-id">Product ID: {product.id}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
