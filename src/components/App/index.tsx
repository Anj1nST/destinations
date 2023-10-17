import React, { useState } from "react";

import "./styles.scss";

import DestinationSearch from "../DestinationSearch";
import DestinationDetails from "../DestinationDetails";
import { IDestination } from "../../types";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [selectedDestination, setSelectedDestination] =
    useState<IDestination | null>(null);
  const [destinations, setDestinations] = useState<IDestination[]>([]);
  const [nearestDestinations, setNearestDestinations] = useState<
  IDestination[]
>([]);

  return (
    <div className="app-container">
      <DestinationSearch
        inputValue={inputValue}
        setInputValue={setInputValue}
        setSelectedDestination={setSelectedDestination}
        selectedDestination={selectedDestination}
        destinations={destinations}
        setDestinations={setDestinations}
        setNearestDestinations={setNearestDestinations}
      />
      <DestinationDetails
        inputValue={inputValue}
        selectedDestination={selectedDestination}
        nearestDestinations={nearestDestinations}
        setNearestDestinations={setNearestDestinations}
      />
    </div>
  );
};

export default App;
