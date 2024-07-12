import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllProducts from './pages/AllProducts';
import TopProducts from './pages/TopProducts';
import ProductPage from './components/ProductPage';
import './index.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/products/top" element={<TopProducts topN={10} />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/" element={<AllProducts />} />
      </Routes>
    </Router>
  );
};

export default App;
