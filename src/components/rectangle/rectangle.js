import React, { useState } from "react";
import SearchPanel from "../search-panel";
import Helper from "../helper";

import "./rectangle.scss";

const Rectangle = () => {
  const [isNotSearching, setIsNotSearching] = useState(true);

  const onSearch = () => {
    setIsNotSearching(false);
  };
  const onNotSearch = () => {
    setIsNotSearching(true);
  };

  const isSearching = isNotSearching ? <Helper /> : null;
  return (
    <div className="rectangle">
      <SearchPanel onSearch={onSearch} onNotSearch={onNotSearch} />
      {isSearching}
    </div>
  );
};

export default Rectangle;
