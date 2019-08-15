import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import SearchPanel from "../search-panel";
import Helper from "../helper";
import OrganizationDetails from "../organization-details";
import OrganizationsList from "../organizations-list";
import DaDataService from "../../services/dadata-service";

import "./main.scss";

const service = new DaDataService();

const Main = () => {
  const [organizations, setOrganizations] = useState([]);
  const [suggestion, setSuggestion] = useState({});
  const [rows, setRows] = useState([]);
  const [view, setView] = useState("searching");
  const [isNotSearching, setIsNotSearching] = useState(true);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await service.getOrganizations();

      setOrganizations(response);
    }

    fetchData();
  }, []);

  const onViewSelected = view => {
    setView(view);
  };

  const onSearch = () => {
    setIsNotSearching(false);
  };

  const onNotSearch = () => {
    setIsNotSearching(true);
  };

  const onItemSave = () => {
    console.log(rows);
    setRows(rows => {
      rows.push(suggestion);
      return rows;
    });
    console.log(rows);
  };

  const selectSuggestion = item => {
    setIsSelected(true);
    setSuggestion(item);
  };

  const onDelete = () => {};

  const helper = isNotSearching && view === "searching" ? <Helper /> : null;
  const detail =
    isSelected && view === "searching" ? (
      <OrganizationDetails
        name={suggestion.value}
        inn={suggestion.data.inn}
        kpp={suggestion.data.kpp}
        ogrn={suggestion.data.ogrn}
        gen={suggestion.data.management.name}
        address={suggestion.data.address.value}
        onItemSave={onItemSave}
      />
    ) : null;
  const content =
    view === "searching" ? (
      <SearchPanel
        organizations={organizations}
        onSearch={onSearch}
        onNotSearch={onNotSearch}
        selectSuggestion={selectSuggestion}
      />
    ) : (
      <OrganizationsList rows={rows} />
    );

  return (
    <div className="main">
      <h1 className="label">Мои организации</h1>
      <Navbar onViewSelected={onViewSelected} itemsCount={rows.length} />
      <div className="rectangle">
        {content}
        {detail}
        {helper}
      </div>
    </div>
  );
};

export default Main;
