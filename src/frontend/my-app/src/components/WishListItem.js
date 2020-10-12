import React from 'react';

export default function wishListItem(props) {
  const [title, setTitle] = React.useState("Title");
  const [comment, setComment] = React.useState("Comment");
  const [desireDegree, setDesireDegree] = React.useState("desireDegree");
  const [picture, setPicture] = React.useState("picture");
  const handleChange1 = event => {
    setTitle(event.target.value);
  };
  const handleChange2 = event => {
    setComment(event.target.value);
  };
  const handleChange3 = event => {
    setDesireDegree(event.target.value);
  };
  const handleChange4 = event => {
    setPicture(event.target.value);
  };
  return (
    <div>
      <input placeholder="title" onChange={props.handleChange1} />
      <input placeholder="comment" onChange={props.handleChange2} />
      <input placeholder="desireDegree" onChange={props.handleChange3} />
      <input placeholder="picture" onChange={props.handleChange4} />
      <button className="addWishListItem" onClick={handleClick}>
      </button>
    </div>
  );
}


