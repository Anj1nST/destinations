import React, { useEffect, useState } from "react";

import "./styles.scss";
import { debounce } from "../../utils/debounce";
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
  const [error, setError] = useState("");
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async function () {
      setError("");
      if (inputValue) {
        setDataIsLoading(true);

        // @ts-ignore
        const res: IDestination[] | IError = await getDestinations(inputValue);

        if (res.message) {
          setError(res.message);
          return;
        }
        setDestinations(res);
        setAutosuggestResults(res);
        setDataIsLoading(false);
      } else {
        setDataIsLoading(false);
      }
    };
    debounce(fetchData, 1000);
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

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="autoSuggest-container">
      {!!autosuggestResults?.length && (
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
      )}
    </div>
  );
};

export default AutoSuggest;
