import React, { useState } from 'react';
import './index.css'; 
import image1Src from '../../../assets/ab1.png'; 
import image2Src from '../../../assets/ab2.png';
import image3Src from '../../../assets/ab3.png';
import Footer from '../../Footer';
import Header from '../../Header';

const InfoPage = () => {
  const [showContactDetails, setShowContactDetails] = useState(false);

  const toggleContactDetails = () => {
    setShowContactDetails(!showContactDetails);
  };

  return (
    <div className="info-page">
      <Header />

      <div className="info-block">
        <p>
          We are advocates of healthy eating and use only fresh produce. We explore new ways of cooking healthy food deliciously. We believe that healthy eating is the foundation of a quality life. Our mission is to provide our customers with the best dishes made from quality ingredients.
        </p>
        <img src={image1Src} alt="helthy" />
      </div>

      <div className="info-block reverse">
        <img src={image2Src} alt="world" />
        <p>
          We are interested in franchise development to popularize healthy eating. We offer favorable conditions for partners, aiming to expand our influence and help more people choose healthy food.
        <div className="button-container">
          <button className="more-info-button" onClick={toggleContactDetails}>
            For investors
          </button>
          {showContactDetails && (
            <div className="contact-details">
              <p>Director's: John Doe</p>
              <p>Email: john.doe@example.com</p>
              <button className="more-info-button" onClick={toggleContactDetails}>Close</button>
            </div>
          )}
        </div> 
        </p>
       
      </div>

      <div className="info-block m">
        <p>
          We are represented in several cities: New York, London, Paris, Tokyo, Lisbon. We aim to be accessible to more people, so our distribution network covers key world metropolises.
        </p>
        <img src={image3Src} alt="cultur" />
      </div>

      <Footer />
    </div>
  );
};

export default InfoPage;
