import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Welcome from './Component/Welcome';
import Card from './Component/Card';
import Carousel from './Component/Carousel';
import FreshApp from './Component/FreshApp';
import ShopCart from './pages/ShopCart';

const App = () => {
  return (
    <div>
       {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/card" element={<Card />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/freshapp" element={<FreshApp />} />
          <Route path="/ShopCart" element={<ShopCart />} />
        </Routes>
        <Footer />
      </Router>  */}

      <Navbar/>


      
    
      
    </div>
  );
};

export default App;
