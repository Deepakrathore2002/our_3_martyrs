import React from "react";

function Cards(props) {
  return (
    <div className="card">
      <div className="top">
        <h5 className="name">{props.name}</h5>

        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.dob}</p>
        <p className="info">{props.about}</p>
      </div>
    </div>
  );
}
export default Cards;
