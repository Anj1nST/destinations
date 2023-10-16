import React, { useState } from "react";

import "./styles.scss";

import DestinationSearch from "../DestinationSearch";
import DestinationDetails from "../DestinationDetails";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedDestination, setSelectedDestination] = useState(null);

  return (
    <div className="app-container">
      <DestinationSearch
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSelectedDestination={setSelectedDestination}
        selectedDestination={selectedDestination}
      />
      <DestinationDetails
        inputValue={inputValue}
        selectedDestination={selectedDestination}
      />
    </div>
  );
};

export default App;
