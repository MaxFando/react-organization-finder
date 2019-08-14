import React from "react";
import Header from "../header";
import Main from "../main";

import "./app.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
};

export default App;
