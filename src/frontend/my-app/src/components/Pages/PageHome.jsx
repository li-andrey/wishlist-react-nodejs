import React from 'react';
import { Form } from 'react-bootstrap';

export default function PageHome(props) {
  return (
    <React.Fragment>
      <div className="cover">
        <h1 className="main_h1">Friend's WishList - это уютный сервис для помощи в подборе подарков своим друзьям</h1>
        <input className="inputID" placeholder="Введите имя вашего друга" />
      </div>
    </React.Fragment>
  );
}
