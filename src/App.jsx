import React from 'react'
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Category from './Components/Category/Category';
import Category2 from './Components/Category/Category2';
import Services from './Components/Services/Services';
import Banner from './Components/Banner/Banner';
import headphone from './assets/hero/headphone.png';

const BannerData={
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  bgColor: "#f42c37"

};

const App = () => {
  return( 
  <div className="bg-white dark:bg-gray-900 dark:text-white
  duration-200 overflow-hidden">
    <Navbar/>
    <Hero/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data= {BannerData}/>



  </div>);
}

export default App;