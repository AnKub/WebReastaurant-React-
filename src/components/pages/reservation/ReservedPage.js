import React, { useState } from 'react';
import './index.css'; 
import Footer from '../../Footer';
import Header from '../../Header';

const ReservedPage = () => {
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
     console.log('Фамилия:', surname);
    console.log('Номер телефона:', phoneNumber);
    console.log('Номер столика:', tableNumber);
    console.log('Выбранная дата:', selectedDate);
    console.log('Выбранное время:', selectedTime);
  };

  return (
    <div>
     <Header/> 
      <div className="reservation-form">
        <h2>Fill the field</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label>Surname:</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div>
            <label>Phone number:</label>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Number of tabel:</label>
            <input
              type="number"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min="2023-01-01" // Минимальная дата
              max="2023-12-31" // Максимальная дата
            />
          </div>
          <div>
            <label>Time:</label>
            <input
              type="time"
              value={selectedTime}
              onChange={(e) => setSelectedTime(e.target.value)}
              min="11:00" // Минимальное время
              max="21:00" // Максимальное время
            />
          </div>
          <button className='add-button' type="submit">Make Reservation</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
};

export default ReservedPage;
