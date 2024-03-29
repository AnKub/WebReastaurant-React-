import React from 'react';
import './index.css'; // Подключаем index.css
import Footer from '../../Footer';
import Header from '../../Header';



const MenuItem = ({ title, detail, rating, img }) => {
  return (
    <div className="menu-item">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{detail}</p>
      <div className="add-button">Add</div>
    </div>
  );
};

const MenuPage = () => {
  const menuItems = [
    {
      title:'Schezwan Noodles',
      detail:'Schezwan noodles is completely vegan, and delicious to prepare as a tasty lunch or dinner.',
      rating:4,
      img:'../../images/schaz.png'
      },
      {
      title:'Veg Burdger',
      detail:'Wheat bun, veggie cutlet, ketchup, honey cucumber, iceberg lettuce, tsibula, tomato.Served with potato fries or potato balls.',
      rating:4,
      img:'../../images/vbur.png'
      },
      {
      title:'Egg Carry',
      detail:'Egg curry made in Punjabi dhaba style. Simple, flavorful & delicious egg curry for your everyday meal to pair with roti, jeera rice or rice.',
      rating:4,
      img:'../../images/egg.png'
      },
      {
      title:'Veg Pizza',
      detail:'Fresh, warm Italian flatbread, smothered in bright and nutritious veggies… you will love this Flatbread Veggie-Lovers Pizza',
      rating:4,
      img:'../../images/pizza.png'
      },
      {
      title:'Fried Rice',
      detail:'This Chinese-inspired fried rice recipe is my absolute fave. Customizable with any of your favorite mix-ins, and so irresistibly delicious.',
      rating:4,
      img:'../../images/friedrice.png'
      },
      {
      title:'Veg Thai',
      detail:'This Thai Curry Soup, naturally gluten-free, and totally customizable with whatever veggies, proteins or noodles you happen to have on hand.',
      rating:4,
      img:'../../images/thaiv.png'
      },
  ];

  return (    
    <div className="menu-page">
      <Header/>    
      <div className="menu-buttons">
        <button className="pizza button-27">Pizza</button>
        <button className="burgers button-27">Burgers</button>
        <button className="asianfood button-27">Asian Food</button>
        <button className="italienfood button-27">Italien Food</button>
        <button className="desserts button-27">Desserts</button>
      </div>
      <div className="menu-items">
        {menuItems.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default MenuPage;
