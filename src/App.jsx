import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './pages/Home';
import ShopCart from './pages/ShopCart';

const App = () => {
  return (
    <div>
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ShopCart" element={<ShopCart />} />
        </Routes>
        <Footer />
      </Router>  

      


      
    
      
    </div>
  );
};

export default App;
