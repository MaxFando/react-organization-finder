import React, { useState } from "react";

import "./organizations-list.scss";

import trash from "./trash.svg";
import arrow from "./arrow.svg";

const OrganizationsList = ({ rows, onDelete }) => {
  const content = rows.reduce((acc, row) => {
    acc[row.value] = (
      <List
        key={row.data.inn}
        name={row.value}
        inn={row.data.inn}
        kpp={row.data.kpp}
        ogrn={row.data.ogrn}
        gen={row.data.management.name}
        address={row.data.address.value}
        onDelete={onDelete}
      />
    );

    return acc;
  }, []);

  return <ul className="organizations-list">{Object.values(content)}</ul>;
};

const List = ({ name, inn, kpp, orgn, address, gen, onDelete, key }) => {
  const [more, setMore] = useState(false);

  const onMoreClick = e => {
    setMore(!more);
    const button =
      e.target === "BUTTON" ? e.target : e.target.closest("button");

    const item = button.closest(".organizations-list__item");
    const arrow = item.querySelector(".more__img");
    const section = item.querySelector(".organizations-list__section");

    arrow.classList.toggle("more_img_open");
    item.classList.toggle("organizations-list__item_closed");
    section.classList.toggle("organizations-list__section_closed");
  };

  const handleDelete = e => {
    const item = e.target.closest(".organizations-list__item");
    const inn = item.dataset.key;

    onDelete(inn);
  };

  const toggleLabel = more ? "подробнее" : "скрыть подробности";

  return (
    <li key={key} className="organizations-list__item" data-key={inn}>
      <section className="organizations-list__section">
        <h2 className="organizations-list__item-label">{name}</h2>
        <div className="organizations-list__item-details">
          <p>
            <span>ИНН</span> {inn}
          </p>
          <p>
            <span>КПП</span> {kpp}
          </p>
          <p>
            <span>ОРГН</span> {orgn}
          </p>
          <p>
            <span>Юридический адрес</span> {address}
          </p>
          <p>
            <span>Генеральный директор</span> {gen}
          </p>
        </div>
      </section>
      <aside className="organizations-list__item-actions">
        <button className="trash" onClick={handleDelete}>
          <img src={trash} alt="trash" />
        </button>
        <button className="more" onClick={onMoreClick}>
          <span>{toggleLabel}</span>{" "}
          <img className="more__img" src={arrow} alt="arrow" />
        </button>
      </aside>
    </li>
  );
};

export default OrganizationsList;
