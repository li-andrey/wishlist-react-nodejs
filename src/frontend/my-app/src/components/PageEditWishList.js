import React from 'react';
import { useParams } from "react-router-dom";

// PATCH редактирования WishList
async function patchWishList(wishListId) {
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

// POST добавление WishListItem
async function postNewWishListItem(wishListId, picture, title, comment, desireDegree) {
  // Default options are marked with *
  const data = { picture, title, comment, desireDegree }
  const url = `/api/wishlists/${wishListId}/wishlist_item/`
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
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


// // PATCH редактирование WishListItem и определение Assignee
// async function patchWishListItem(wishListItemId, wishListId) {
//   // Default options are marked with *
//   const data = {}
//   const url = `//api/wishlists/:${wishListId}/wishlist_item/${wishListItemId}`
//   const response = await fetch(url, {
//     method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }


// // DELETE удаление WishListItem 
// async function deleteWishListItem(wishListItemId, wishListId) {
//   // Default options are marked with *
//   const data = {}
//   const url = `//api/wishlists/:${wishListId}/wishlist_item/${wishListItemId}`
//   const response = await fetch(url, {
//     method: 'DEL', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }


// Редактирование WishList
export default function EditWishList() {
  const { wishListId } = useParams();
  console.log("wishListId", wishListId)

  // Отправление POST запроса на сервер для редактирования WishList
  const handleEditWishList = () => {
    patchWishList(wishListId);
  };


  // Добавление нового WishListItem
  const [picture, setPicture] = React.useState();
  const handlePicture = event => {
    setPicture(event.target.value);
  };

  const [title, setTitle] = React.useState();
  const handleTitle = event => {
    setTitle(event.target.value);
  };

  const [comment, setComment] = React.useState();
  const handleComment = event => {
    setComment(event.target.value);
  };

  const [desireDegree, setDesireDegree] = React.useState();
  const handleDesireDegree = event => {
    setDesireDegree(event.target.value);
  };

  // Отправление POST запроса на сервер для создания WishListItem
  const handleNewWishListItem = () => {
    postNewWishListItem(wishListId, picture, title, comment, desireDegree);
  };


  // // отправление POST запроса для редактирования и подтверждения Assignee
  // const handleUpdateWishListItem = () => {
  //   patchWishListItem(wishListItemId, wishListId);
  // };


  // // Отправление DEL запроса на сервер для удаления WishListItem
  // const handleDeleteWishListItem = () => {
  //   deleteWishListItem(wishListItemId, wishListId);
  // };


  return (
    <React.Fragment>
      <h1> Редактировать WishList </h1>
      <div>
        <button onClick={handleEditWishList}>Редактировать</button>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Картинка</th>
              <th>Название желания</th>
              <th>Комментарий</th>
              <th>Степень желаемости</th>
              <th>Забронированно</th>
            </tr>
            <tr>
              <td>
                <input placeholder="Здесь нужно указать адрес картинки желаемого подарка в интернете" onChange={handlePicture}></input>
              </td>
              <td>
                <input placeholder="Например: Iphone 12 PRO на 128 GB в синем цвете" onChange={handleTitle}></input>
              </td>
              <td>
                <input placeholder="Расскажите о каких-то особенностях продукта, сфере его применения или любую другую информацию, которая поможет выбрать правильный подарок" onChange={handleComment}></input>
              </td>
              <td onChange={handleDesireDegree}>
                <input type="radio" id="star-5" name="rating" value="5" />
                <label htmlFor="star-5" title="Оценка «5»"></label>
                <input type="radio" id="star-4" name="rating" value="4" />
                <label htmlFor="star-4" title="Оценка «4»"></label>
                <input type="radio" id="star-3" name="rating" value="3" />
                <label htmlFor="star-3" title="Оценка «3»"></label>
                <input type="radio" id="star-2" name="rating" value="2" />
                <label htmlFor="star-2" title="Оценка «2»"></label>
                <input type="radio" id="star-1" name="rating" value="1" />
                <label htmlFor="star-1" title="Оценка «1»"></label>
              </td>
              <td>
                <input type="checkbox" /* onClick={handleUpdateWishListItem} */ />
              </td>
              <td>
                <button onClick={handleNewWishListItem}>Добавить</button>
              </td>
              <td>
                <button /* onClick={handleUpdateWishListItem} */>Редактировать</button>
              </td>
              <td>
                <button /* onClick={handleDeleteWishListItem} */>Удалить</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </React.Fragment>

  );
}