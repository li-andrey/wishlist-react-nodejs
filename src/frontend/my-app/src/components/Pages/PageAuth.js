import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Button } from 'react-bootstrap'

async function postRegister({ ...form }) {
  // Default options are marked with *
  const data = { ...form };
  const url = '/api/registration';
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function postLogin({ ...form }) {
  // Default options are marked with *
  const data = { ...form };
  const url = '/api/login';
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}


export default function PageAuth() {
  const auth = useContext(AuthContext)
  const [form, setForm] = useState({
    name: '', email: '', password: ''
  })


  const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }

  const handleRegister = () => {
    postRegister({ ...form });
  }

  const handleLogin = async () => {
    const data = await postLogin({ ...form })
    auth.login(data.token, data.userId)
  }

  return (
    <React.Fragment>
      <h1> Авторизация </h1>
      <div className='auth'>
        <div>
          <input className='inputAuth' placeholder='Введите ФИО' id='name' type='text' name='name' onChange={changeHandler} />
          <label htmlFor='name'> Имя </label>
        </div>
        <div>
          <input className='inputAuth' placeholder='Введите email' id='email' type='text' name='email' onChange={changeHandler} />
          <label htmlFor='email'> Email </label>
        </div>
        <div>
          <input className='inputAuth' placeholder='Введите пароль' id='password' type='password' name='password' onChange={changeHandler} />
          <label htmlFor='password'> Пароль </label>
        </div>
        <div>
          <Button className='mr-2' variant='primary' onClick={handleLogin}> Войти </Button>
          <Button className='mr-2' variant='primary' onClick={handleRegister}> Зарегистрироваться </Button>
        </div>
      </div>
    </React.Fragment >
  );
}