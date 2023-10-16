import React from "react";

import "./styles.scss";
import AutoSuggest from "../AutoSuggest";
import { IDestination } from "../../types";

const DestinationSearch = ({
  inputValue,
  setInputValue,
  setSelectedDestination,
  selectedDestination,
}: {
  inputValue: string;
  setInputValue: React.Dispatch<string>;
  setSelectedDestination: React.Dispatch<any>;
  selectedDestination: IDestination | null;
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
      />
    </div>
  );
};

export default DestinationSearch;
