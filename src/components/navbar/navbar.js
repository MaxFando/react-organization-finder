import React from "react";

import "./navbar.scss";

const Navbar = ({ onViewSelected, itemsCount }) => {
  return (
    <ul className="navbar">
      <li className="navbar__item navbar__item_active">
        <a onClick={() => onViewSelected("is_searching")}>Новая огранизация</a>
      </li>
      <li className="navbar__item">
        <a onClick={() => onViewSelected("basket")}>
          Сохраненные организации ({itemsCount})
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
