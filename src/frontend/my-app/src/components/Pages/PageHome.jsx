import React from 'react';
import { useHistory } from 'react-router-dom';

// GET all WishList
async function getAllWishList() {
  const url = `/api/wishlists`;
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

export default function PageHome() {
  const history = useHistory();
  const [wishListId, setWishListId] = React.useState('');

  const [wishLists, setWishLists] = React.useState([]);
  console.log('wishLists', wishLists);

  React.useEffect(() => {
    const callGetAllWishLists = async () => {
      const items = await getAllWishList();
      setWishLists(items);
    };
    callGetAllWishLists();
  }, []);

  const handleWishListId = (event) => {
    setWishListId(event.target.value);
  };
  const handleWishList = async () => {
    history.push(`/wishlists/${wishListId}`);
  };
  return (
    <React.Fragment>
      <div className="cover">
        <h1 className="main_h1">Friend's WishList - это уютный сервис для помощи в подборе подарков своим близким</h1>
        <input
          className="inputID"
          placeholder="Введите идентификационный номер вашего друга"
          onChange={handleWishListId}
        />
        <button className="btn1" onClick={handleWishList}>
          Найти
        </button>
        <h2 className="main_h2">Идентификационный номер можно найти в списке ниже:</h2>
      </div>
      <div>
        <table className="table1">
          {wishLists.map((el) => (
            <tr key={el._id} /* style={{ display: 'flex', marginTop: 6 }} */>
              <td>
                <div style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>{el.ownerId}</div>
              </td>
              <td>
                <div className="wishlist_id" style={{ flexBasis: 160, flexGrow: 0, flexShrink: 0 }}>
                  {el._id}
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </React.Fragment>
  );
}
