import React from 'react';
import add_btn from "../img/add.svg";

const Input = () => {
  return (
    <div className="App__input">
      <input placeholder="Write here something..." type="text"/>
      <img src={add_btn} alt="Add btn"/>
    </div>
  );
};

export default Input;