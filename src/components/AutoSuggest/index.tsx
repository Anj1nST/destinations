import React, { useEffect, useState } from "react";

import "./styles.scss";
import { getDestinations } from "../../utils/fake-api";
import { IDestination } from "../../types";
import Loader from "../Loader";

const AutoSuggest = ({
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
  const [destinations, setDestinations] = useState<IDestination[]>([]);
  const [autosuggestResults, setAutosuggestResults] = useState<IDestination[]>(
    []
  );
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async function () {
      if (inputValue) {
        setDataIsLoading(true);
        const res = await getDestinations(inputValue);
        setDestinations(res);
        setAutosuggestResults(res);
        setDataIsLoading(false);
      } else {
        setDataIsLoading(false);
      }
    };
    fetchData();
  }, [inputValue]);

  const handleBlur = () => {
    setDestinations([]);
  };

  const handleClick = (e: React.MouseEvent) => {
    setInputValue("");
    setAutosuggestResults([]);
    const targetElement = e.currentTarget as HTMLElement;
    const selectedDestination = destinations.find(
      (destination: IDestination) => destination.id === +targetElement.id
    );
    setSelectedDestination(selectedDestination);
  };

  if (dataIsLoading) {
    return (
      <div className="autoSuggest-container">
        <Loader />
      </div>
    );
  }

  return (
    <div className="autoSuggest-container">
      <ul>
        {autosuggestResults.map((destination: IDestination) => {
          return (
            <li
              key={destination.id}
              onClick={handleClick}
              id={String(destination.id)}
              onBlur={handleBlur}
            >
              <div>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AutoSuggest;
