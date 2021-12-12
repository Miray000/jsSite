import React from 'react';
import Vector from './images/bag.png';
import Star from './images/star.png';
import StarOpen from './images/staropen.png';
import Bg from './images/Bg.png';
import './App.css';

function App() {
  return (
    <div className="Ground">
      <img className="img" src="https://i.ibb.co/FnSHr5j/Rectangle13.png"/>
      <img className="img1" src="https://i.ibb.co/5h383LK/Rectangle-7.png"/>
      <img className="img2" src="https://i.ibb.co/DMRBq0k/Rectangle-14.png"/>
      <div className="block">
        <p className="our">Our history</p>
        <h3 className="create">Create a<br/> new story with us</h3>
        <p className="mauris">Mauris Rhoncus In Imperdiet Placerat. Vestibu Emismd<br/> Nisl Suscirpit Ligula Volutpat, A Feyguat Urn Maxmaus. Cars Massa Nibhtincidunt. Donec Et Nibh Maximus, Est<br/> Eu, Mattis Nuce. Preasent Ut Quam Quis Quam Venen<br/> Atis Fringilla. Morbi Vastibulum Id Tells Mmodo Mattis. Aliauam Erat Volutpal</p>
      </div>
      <div className="poplarProduct">
      <p className="popular">Popular Product</p>
      <h2 className="coffee">Coffee popular Product</h2>
      <div className="block1">
        <img className="img3" src="https://i.ibb.co/pWfynvS/Rectangle-2.png"/>
        <h4 className="coffee1">COFFEE</h4>
        <img className="star" src={Star} alt="star"/>
      <img className="star1" src={Star} alt="star"/>
      <img className="star2" src={Star} alt="star"/>
      <img className="star3" src={Star} alt="star"/>
      <img className="starOpen" src={StarOpen} alt="star"/>
        <h3 className="brazil">BRAZIL COFFEE GRED</h3>
        <div className="blockt">
        <h4 className="price">PRICE - </h4>
      <h4 className="price2">$320.00/</h4>
      <h4 className="price3">$358</h4>
        <button className="but">
          <img className="ve" src={Vector} alt="vv"/>
          Add to cart
          </button>
          
      </div>
      </div>
      <div className="block2">
      <img className="img3" src="https://i.ibb.co/pWfynvS/Rectangle-2.png"/>
      <h4 className="coffee1">COFFEE</h4>
      <img className="star" src={Star} alt="star"/>
      <img className="star1" src={Star} alt="star"/>
      <img className="star2" src={Star} alt="star"/>
      <img className="star3" src={Star} alt="star"/>
      <img className="starOpen" src={StarOpen} alt="star"/>
      <h3 className="brazil2">BRAZIL COFFEE GRED</h3>
      <div className="blockt">
      <h4 className="price">PRICE - </h4>
      <h4 className="price2">$320.00/</h4>
      <h4 className="price3">$358</h4>
      <button className="but">
          <img className="ve" src={Vector} alt="vv"/>
          Add to cart
          </button>
      </div>
      </div>
      <div className="block3">
      <img className="img3" src="https://i.ibb.co/pWfynvS/Rectangle-2.png"/>
      <h4 className="coffee1">COFFEE</h4>
      <img className="star" src={Star} alt="star"/>
      <img className="star1" src={Star} alt="star"/>
      <img className="star2" src={Star} alt="star"/>
      <img className="star3" src={Star} alt="star"/>
      <img className="starOpen" src={StarOpen} alt="star"/>
      <h3 className="brazil2">BRAZIL COFFEE GRED</h3>
      <div className="blockt">
      <h4 className="price">PRICE - </h4>
      <h4 className="price2">$320.00/</h4>
      <h4 className="price3">$358</h4>
      <button className="but">
          <img className="ve" src={Vector} alt="vv"/>
          Add to cart
          </button>
      </div>
      </div>
      <button className="view">
      VIEW ALL PRODUCT
      </button>
      </div>
      <img className="Bg" src={Bg} alt="bg"/>
      <div className="contacts">
        <p className="reservation">Reservation</p>
        <h3 className="booking">Booking a table</h3>
        <input className="input" type="text" placeholder="4 person"/>
        <input className="input2" type="text" placeholder="15.25.2020"/>
        <input className="input3" type="text" placeholder="11:00 AM"/>
        <button className="table">
          BOOKS TABLE
        </button>
      </div>
    </div>
  );
}

export default App;
