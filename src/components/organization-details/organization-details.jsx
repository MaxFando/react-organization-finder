import React from "react";

import "./organization-details.scss";

import success from "./success.svg";

const OrganizationDetails = ({
  name,
  inn,
  kpp,
  ogrn,
  gen,
  address,
  onItemSave
}) => {
  const onButtonClick = () => {
    onItemSave();

    document.getElementsByClassName("save")[0].classList.add("save_active");
    document
      .getElementsByClassName("save__img")[0]
      .classList.remove("save__img_hidden");
  };

  return (
    <div className="organization" key={inn}>
      <div className="organization__label">
        <h1>{name}</h1>
        <hr />
      </div>
      <div className="organization__short-dec">
        <section>
          <h4>Юридический адрес</h4>
          <p>{address}</p>
          <h4>Генеральный директор</h4>
          <p>{gen}</p>
        </section>

        <aside>
          <h4>ИНН </h4> <span>{inn}</span>
          <h4>КПП </h4> <span>{kpp}</span>
          <h4>ОРГН</h4> <span>{ogrn}</span>
        </aside>
      </div>

      <button className="save" onClick={() => onButtonClick()}>
        <img className="save__img save__img_hidden" src={success} alt="" />
        <h2 className="save__label">Сохранить</h2>
      </button>
    </div>
  );
};

export default OrganizationDetails;
