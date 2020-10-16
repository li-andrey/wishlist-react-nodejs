import React from 'react';

async function postSignIn(userId) {
  // Default options are marked with *
  const data = {};
  const url = `/api/sign_in/${userId}`;
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

export default function SignIn() {
  const [userId, setUserId] = React.useState();
  const handleChange1 = (event) => {
    setUserId(event.target.value);
  };

  const handleLogIn = () => {
    postSignIn(userId);
    window.location.href = '/wishlists';
  };

  return (
    <React.Fragment>
      <h1> Авторизация </h1>
      <div>
        <p>Введите свой ID</p>
        <p>User 1 = 5f816f038768713dd5161668</p>
        <p>User 2 = 5f843f968c01802a7451c97c</p>
        <input onChange={handleChange1}></input>
        <button onClick={handleLogIn}>Войти</button>
      </div>
    </React.Fragment>
  );
}
