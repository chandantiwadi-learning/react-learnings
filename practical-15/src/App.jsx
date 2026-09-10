import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import ProductDetails from './components/ProductDetails';
import Pagination from './components/Pagination';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import { getProducts, searchProducts, getProductById } from './services/productApi';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  // Pagination & Search state
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  
  const limit = 12;

  // Fetch products
  const fetchProductsData = async () => {
    setLoading(true);
    setError(null);
    try {
      if (query) {
        // DummyJSON search doesn't support pagination properly with skip/limit on /search
        // So we just fetch all matching and handle locally or rely on whatever they return
        const data = await searchProducts(query);
        setProducts(data.products);
        setTotalProducts(data.total);
      } else {
        const skip = (currentPage - 1) * limit;
        const data = await getProducts(limit, skip);
        setProducts(data.products);
        setTotalProducts(data.total);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!selectedProduct) {
      fetchProductsData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, query, selectedProduct]);

  const handleSearch = (searchQuery) => {
    setQuery(searchQuery);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleViewDetails = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProductById(id);
      setSelectedProduct(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
  };

  const handleRetry = () => {
    if (selectedProduct) {
      handleViewDetails(selectedProduct.id);
    } else {
      fetchProductsData();
    }
  };

  const totalPages = Math.ceil(totalProducts / limit);

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        {error && <ErrorMessage message={error} onRetry={handleRetry} />}
        
        {loading && !error && <Loading />}
        
        {!loading && !error && selectedProduct && (
          <ProductDetails 
            product={selectedProduct} 
            onBack={handleBackToProducts} 
          />
        )}
        
        {!loading && !error && !selectedProduct && (
          <>
            <SearchBar onSearch={handleSearch} />
            <ProductGrid 
              products={products} 
              onViewDetails={handleViewDetails} 
            />
            {query === '' && (
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={setCurrentPage} 
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
