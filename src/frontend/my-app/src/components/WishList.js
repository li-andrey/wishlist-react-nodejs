import React from 'react';

export default function wishList(props) {
  const oneWish = (i) => {
    return (
      <WishListItem
        value={props.items[i]}
        onClick={() => props.onClick(i)}
      />
    );
  }
  return (
    <div>
      <div className="board-row">
        {oneWish(0)}
        {oneWish(1)}
        {oneWish(2)}
        {oneWish(3)}
      </div>
    </div>
  );
}