import React from 'react';
import { useParams } from 'react-router-dom';
import '../../css/desireDegree.css';

// PATCH редактирования WishList
/* async function patchWishList(wishListId) {
  // Default options are marked with *
  const data = {};
  const url = `/api/wishlists/${wishListId}`;
  const response = await fetch(url, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
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
 */
// POST добавление WishListItem
async function postNewWishListItem(wishListId, picture, title, comment, desireDegree) {
  // Default options are marked with *
  const data = { picture, title, comment, desireDegree };
  const url = `/api/wishlists/${wishListId}/wishlist_item/`;
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

// PATCH редактирование WishListItem и определение Assignee
async function patchWishListItem(wishListId, wishListItemId, picture, title, comment, desireDegree) {
  // Default options are marked with *
  const data = { picture, title, comment, desireDegree };
  const url = `/api/wishlists/${wishListId}/wishlist_item/${wishListItemId}`;
  const response = await fetch(url, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
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

// PATCH определение Assignee для WishListItem
async function patchWishListItemAssignee(
  wishListId,
  wishListItemId,
  picture,
  title,
  comment,
  desireDegree,
  assigneeId
) {
  // Default options are marked with *
  const data = { picture, title, comment, desireDegree, assigneeId };
  const url = `/api/wishlists/${wishListId}/wishlist_item/${wishListItemId}/set_assignee`;
  const response = await fetch(url, {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
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

// DELETE удаление WishListItem
async function deleteWishListItem(wishListItemId, wishListId) {
  // Default options are marked with *
  const data = {};
  const url = `/api/wishlists/${wishListId}/wishlist_item/${wishListItemId}`;
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
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

// GET all WishListItem
async function getAllWishListItems(wishListId) {
  const url = `/api/wishlists/${wishListId}/wishlist_item`;
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// Редактирование WishList
export default function EditWishList() {
  const { wishListId } = useParams();
  console.log('wishListId', wishListId);

  const [wishListItems, setWishListItems] = React.useState([]);
  console.log('wishListItems', wishListItems);

  const [picture, setPicture] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [comment, setComment] = React.useState('');
  const [desireDegree, setDesireDegree] = React.useState('');
  const [wishListItemId, setWishListItemId] = React.useState('');
  const [assigneeId, setAssigneeId] = React.useState('');

  React.useEffect(() => {
    const callGetAllWishListItems = async () => {
      const items = await getAllWishListItems(wishListId);
      setWishListItems(items);
    };
    callGetAllWishListItems();
  }, [wishListId]);

  // Отправление PATCH запроса на сервер для редактирования WishList
  /*   const handleEditWishList = () => {
    patchWishList(wishListId);
  }; */
  // Добавление нового WishListItem
  const handlePicture = (event) => {
    setPicture(event.target.value);
  };
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleComment = (event) => {
    setComment(event.target.value);
  };
  const handleDesireDegree = (event) => {
    setDesireDegree(event.target.value);
  };
  const handleChangeWishListItemId = (event) => {
    setWishListItemId(event.target.value);
  };

  // Сохранение WishListItem
  const handleSaveWishListItem = async () => {
    if (!wishListItemId) {
      // Create
      await postNewWishListItem(wishListId, picture, title, comment, desireDegree);
    } else {
      // Update
      await patchWishListItem(wishListId, wishListItemId, picture, title, comment, desireDegree, assigneeId);
    }
    const items = await getAllWishListItems(wishListId);
    setWishListItems(items);
    setTitle('');
    setComment('');
    setDesireDegree('');
    setPicture('');
    setWishListItemId('');
    setAssigneeId('');
  };

  const handleClickEdit = (wishListItem) => () => {
    setWishListItemId(wishListItem._id);
    setTitle(wishListItem.title);
    setComment(wishListItem.comment);
    setDesireDegree(wishListItem.desireDegree);
    setPicture(wishListItem.picture);
  };

  // Отправление DELETE запроса на сервер для удаления WishListItem
  const handleClickDelete = (wishListItem) => async () => {
    await deleteWishListItem(wishListItem._id, wishListId);
    const items = await getAllWishListItems(wishListId);
    setWishListItems(items);
    setTitle('');
    setComment('');
    setDesireDegree('');
    setPicture('');
    setWishListItemId('');
  };

  const handleClickAssignee = (wishListItem) => async () => {
    await patchWishListItemAssignee(
      wishListId,
      wishListItem._id,
      wishListItem.picture,
      wishListItem.title,
      wishListItem.comment,
      wishListItem.desireDegree,
      wishListItem.assigneeId
    );
  };

  return (
    <React.Fragment>
      <h1> Andrey's WishList </h1>
      <div>
        {/*         <button className="btn1" onClick={handleEditWishList}>
          Редактировать
        </button> */}
      </div>
      <div class="table-container">
        <table width="100%">
          <tbody>
            <tr>
              <th>Картинка</th>
              <th>Название желания</th>
              <th>Комментарий</th>
              <th>Степень желаемости</th>
              <th>Забронированно</th>
              <th>WishListItemID</th>
            </tr>
            <tr>
              <td>
                <input
                  className="inputItem"
                  placeholder="Здесь нужно указать адрес картинки желаемого подарка в интернете"
                  onChange={handlePicture}
                  value={picture}
                />
              </td>
              <td>
                <input
                  className="inputItem"
                  placeholder="Например: Iphone 12 PRO на 128 GB в синем цвете"
                  onChange={handleTitle}
                  value={title}
                />
              </td>
              <td>
                <input
                  className="inputItem"
                  placeholder="Расскажите о каких-то особенностях продукта, сфере его применения или любую другую информацию, которая поможет выбрать правильный подарок"
                  onChange={handleComment}
                  value={comment}
                />
              </td>
              <td className="rating-area" onChange={handleDesireDegree}>
                <input type="radio" id="star-5" name="rating" value="5" />
                <label htmlFor="star-5" title="Оценка «5»" />
                <input type="radio" id="star-4" name="rating" value="4" />
                <label htmlFor="star-4" title="Оценка «4»" />
                <input type="radio" id="star-3" name="rating" value="3" />
                <label htmlFor="star-3" title="Оценка «3»" />
                <input type="radio" id="star-2" name="rating" value="2" />
                <label htmlFor="star-2" title="Оценка «2»" />
                <input type="radio" id="star-1" name="rating" value="1" />
                <label htmlFor="star-1" title="Оценка «1»" />
              </td>
              <td>
                <input type="checkbox" /*  onClick={handleUpdateWishListItem}  */ />
              </td>
              <td>
                <input
                  className="inputItem"
                  disabled={true}
                  onChange={handleChangeWishListItemId}
                  value={wishListItemId}
                />
              </td>
              <td>
                <button className="btn1" onClick={handleSaveWishListItem}>
                  Сохранить
                </button>
              </td>
              {/* <td>
                <button onClick={handleDeleteWishListItem}>Удалить</button>
              </td> */}
            </tr>
            {wishListItems.map((el) => (
              <tr key={el._id} /* style={{ display: 'flex', marginTop: 6 }} */>
                <td>
                  <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                    <img width={150} alt="Желание" src={el.picture} />
                  </div>
                </td>
                <td>
                  <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>{el.title}</div>
                </td>
                <td>
                  <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>{el.comment}</div>
                </td>
                <td>
                  <div className="rating-area" style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                    {el.desireDegree}
                  </div>
                </td>
                <td>
                  <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                    <input type="checkbox" name="assignee" onClick={handleClickAssignee(el)} />
                  </div>
                </td>
                <td>
                  <input className="inputItem" disabled={true} value={el._id} />
                </td>
                <td>
                  <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                    <button className="btn1" onClick={handleClickEdit(el)}>
                      Редактировать
                    </button>
                  </div>
                </td>
                <td>
                  <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                    <button className="btn1" onClick={handleClickDelete(el)}>
                      Удалить
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
}
