import React from "react";

import "./styles.scss";
import { IDestinationSearch } from "./types";

import AutoSuggest from "../AutoSuggest";

const DestinationSearch: React.FC<IDestinationSearch> = ({
  inputValue,
  setInputValue,
  setSelectedDestination,
  selectedDestination,
  destinations,
  setDestinations,
  setNearestDestinations
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSelectedDestination(null);
  };

  return (
    <div className="destinationSearch-container">
      <input
        onChange={handleChange}
        value={inputValue}
        placeholder="Input a travel destination"
      />
      <AutoSuggest
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSelectedDestination={setSelectedDestination}
        selectedDestination={selectedDestination}
        destinations={destinations}
        setDestinations={setDestinations}
        setNearestDestinations={setNearestDestinations}
      />
    </div>
  );
};

export default DestinationSearch;
