import React from 'react';
import Highlight from './Highlight';
import AboutUs from './AboutUs';
import WhyChooseUs from './WhyChooseUs';
import Menu from './Menu';
import Testimonal from './Testimonal';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header/>
      <React.StrictMode>
      <Highlight />
      <AboutUs />
      <WhyChooseUs />
      <Menu />
      <Testimonal />
      </React.StrictMode>
      <Footer/>
   
    </div>
  );
};

export default HomePage;
