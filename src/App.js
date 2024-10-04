import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import ProductList from './components/productlist/ProductList';
import './App.css';

function App() {
  const [products, setProducts] = useState({ coffee: [], cake: [], sandwiches: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/products.json`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);


  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (loading) {
    return <div className="loading-message">Loading products...</div>;
  }

  return (
    <div className="app-container">
      <Navbar toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      <div className="main-content">
        {/* Kaffee Produkte */}
        <div id="kaffee-section" className="section">
          <h2>Kaffee</h2>
          <ProductList products={products.coffee} />
        </div>

        {/* Kuchen Produkte */}
        <div id="kuchen-section" className="section">
          <h2>Kuchen</h2>
          <ProductList products={products.cake} />
        </div>

        {/* Sandwiches Produkte */}
        <div id="sandwiches-section" className="section">
          <h2>Sandwiches</h2>
          <ProductList products={products.sandwiches} />
        </div>
        <div id="kaffee-sectio" className="section">
          <h2>Kaffee</h2>
          <ProductList products={products.coffee} />
        </div>

        {/* Kuchen Produkte */}
        <div id="kuchen-sectio" className="section">
          <h2>Kuchen</h2>
          <ProductList products={products.cake} />
        </div>

        {/* Sandwiches Produkte */}
        <div id="sandwiches-sectio" className="section">
          <h2>Sandwiches</h2>
          <ProductList products={products.sandwiches} />
        </div>
      </div>
    </div>
  );
}

export default App;
