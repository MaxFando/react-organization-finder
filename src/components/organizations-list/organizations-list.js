import React, { useState, useEffect } from "react";

import "./organizations-list.scss";

import trash from "./trash.svg";
import arrow from "./arrow.svg";

const OrganizationsList = ({ rows }) => {
  const [more, setMore] = useState(false);
  const [section, setSection] = useState("organizations-list__section");

  const onMoreClick = e => {
    setMore(!more);
    more
      ? setSection("organizations-list__section")
      : setSection(
          "organizations-list__section organizations-list__section_closed"
        );
  };

  const toggleLabel = more ? "подробнее" : "скрыть подробности";
  const toggleClass = more ? "more__img" : "more__img more_img_open";
  const itemClass = !more
    ? "organizations-list__item"
    : "organizations-list__item organizations-list__item_closed";

  const content = rows.reduce((acc, row) => {
    acc[row.value] = (
      <List
        name={row.value}
        inn={row.data.inn}
        kpp={row.data.kpp}
        ogrn={row.data.ogrn}
        gen={row.data.management.name}
        address={row.data.address.value}
        toggleLabel={toggleLabel}
        toggleClass={toggleClass}
        itemClass={itemClass}
        section={section}
        onMoreClick={onMoreClick}
      />
    );

    return acc;
  }, []);

  return <ul className="organizations-list">{Object.values(content)}</ul>;
};

const List = ({
  name,
  inn,
  kpp,
  orgn,
  address,
  gen,
  toggleClass,
  toggleLabel,
  itemClass,
  section,
  onMoreClick
}) => {
  return (
    <li key={inn} className={itemClass}>
      <section className={section}>
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
        <button className="trash">
          <img src={trash} alt="" />
        </button>
        <button className="more" onClick={onMoreClick}>
          <span>{toggleLabel}</span> <img className={toggleClass} src={arrow} />
        </button>
      </aside>
    </li>
  );
};

export default OrganizationsList;
