import React from 'react'
import Welcome from '../Component/Welcome';
import Card from '../Component/Card';
import Carousel from '../Component/Carousel';
import FreshApp from '../Component/FreshApp';
import Navbar from '../Component/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar />
        <Welcome />
          <Card />
          <Carousel />
          <FreshApp />
    </div>
  )
}

export default Home
