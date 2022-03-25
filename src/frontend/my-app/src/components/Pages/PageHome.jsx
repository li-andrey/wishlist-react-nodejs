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
  const [wishLists, setWishLists] = React.useState([]);

  React.useEffect(() => {
    const callGetAllWishLists = async () => {
      const items = await getAllWishList();
      setWishLists(items);
    };
    callGetAllWishLists();
  }, []);
  console.log(1111, wishLists);

  return (
    <React.Fragment>
      <div className="cover">
        <h1 className="main_h1">Мы поможем подобрать подарок вашим близким</h1>

        <div className="main-content">
          <h2 className="main_h2">Список всех Whishlists:</h2>
          <div className="table-users">
            <table className="table1">
              <tbody>
                {wishLists.map((el) => (
                  <tr key={el._id}>
                    <td className="tb-users">
                      <div>{el.owner.name}</div>
                    </td>
                    <td className="tb-users">
                      <button
                        className="btn-open"
                        onClick={() => {
                          history.push(`/wishlists/${el._id}`);
                        }}
                      >
                        Перейти
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
