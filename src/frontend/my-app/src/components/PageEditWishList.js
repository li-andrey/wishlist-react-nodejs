import React from 'react';
import { useParams } from "react-router-dom";

async function postData(wishListId) {
  // Default options are marked with *
  const data = {}
  const url = `/api/wishlists/${wishListId}`
  const response = await fetch(url, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

export default function EditWishList() {
  const { id } = useParams();
  console.log(id, id)

  const handleEditWishList = () => {
    postData(id);
  };


  return (
    <React.Fragment>
      <h1> Редактировать WishList </h1>
      <div>
        <button onClick={handleEditWishList}>Редактировать</button>
      </div>
    </React.Fragment>

  );
}