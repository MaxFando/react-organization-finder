import React from "react";

import plus from "./plus.svg";
import "./helper.scss";

const Helper = () => {
  return (
    <div className="helper">
      <img src={plus} alt="" className="helper__image" />
      <div className="helper__text">
        <span>
          Для добавления новой организации введите ее название, ИНН или адрес.
        </span>
      </div>
    </div>
  );
};

export default Helper;
