import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const menus = [
    { id: 1, name: 'Home', link: '/' },
    { id: 2, name: 'Menu', link: '/components/pages/menu' }, 
    { id: 3, name: 'Contact', link: '/' }, 
    { id: 4, name: 'Reserved', link: '/components/pages/reservation' }, 
    { id: 5, name: 'Info', link: '/components/pages/info' }, 
  ];
  const callButtonHandler = () => {
    const phoneNumber = '+1234567890';
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className='container header'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <Link to="/" className='navbar-brand'>
            <img src='../../images/logo.png' id='logo' alt='logo' />
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              {menus.map((menu) => (
                <li className='nav-item' key={menu.id}>
                  <Link to={menu.link} className='nav-link'>
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>           
          </div>                 
        </div>
        <div>
        <button className='call-button' onClick={callButtonHandler}>
        <img src='../../images/phone.png' id='logo' alt='call' />
      </button> 
        </div>
        
      </nav>
    </div>
  );
};

export default Header;
