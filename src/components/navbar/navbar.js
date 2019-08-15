import React from "react";

import "./navbar.scss";

const Navbar = ({ onViewSelected, itemsCount }) => {
  const onClick = type => {
    onViewSelected(type);

    const list = document.getElementsByClassName("navbar")[0];
    Array.from(list.children).map(item =>
      item.classList.remove("navbar__item_active")
    );

    document.getElementById(type).classList.add("navbar__item_active");
  };

  return (
    <ul className="navbar">
      <li className="navbar__item navbar__item_active" id="searching">
        <a onClick={() => onClick("searching")}>Новая огранизация</a>
      </li>
      <li className="navbar__item" id="basket">
        <a onClick={() => onClick("basket")}>
          Сохраненные организации ({itemsCount})
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
