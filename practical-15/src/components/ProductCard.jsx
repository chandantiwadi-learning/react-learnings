import React from 'react';

const ProductCard = ({ product, onViewDetails }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.thumbnail} alt={product.title} className="product-image" loading="lazy" />
        {product.discountPercentage > 0 && (
          <span className="discount-badge">-{Math.round(product.discountPercentage)}%</span>
        )}
      </div>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-description">{product.description.substring(0, 60)}...</p>
        <div className="product-meta">
          <span className="product-price">${product.price}</span>
          <span className="product-rating">⭐ {product.rating}</span>
        </div>
        <p className="product-stock">Stock: {product.stock}</p>
        <button 
          className="view-details-btn" 
          onClick={() => onViewDetails(product.id)}
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
