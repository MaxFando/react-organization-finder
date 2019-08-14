import React, { useState, useEffect } from "react";
import Autosuggest from "react-autosuggest";
import Suggestion from "../suggestion";
import "./search-panel.scss";
import DaDataService from "../../services/dadata-service";

const service = new DaDataService();

const getSuggestionValue = suggestion => suggestion.value;
const renderSuggestion = suggestion => <Suggestion suggestion={suggestion} />;
const getSuggestions = (value, { suggestions }) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : suggestions.filter(
        org => org.value.toLowerCase().slice(0, inputLength) === inputValue
      );
};

const SearchPanel = ({ onSearch, onNotSearch }) => {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await service.getOrganizations();

      setOrganizations(response);
    }

    fetchData();
  }, []);

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value, organizations));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (
    event,
    { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }
  ) => {};

  useEffect(() => {
    return value === "" ? onNotSearch() : onSearch();
  });

  const inputProps = {
    placeholder: "Введите название, ИНН или адрес организации",
    value,
    onChange: onChange
  };

  return (
    <div>
      <span className="label">Организации или ИП</span>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  );
};

SearchPanel.defaultProps = {
  organizations: []
};

export default SearchPanel;
