import React, { useEffect, useState } from "react";

import "./styles.scss";
import { IDestinationDetails } from "./types";
import Loader from "../Loader";
import { IDestination } from "../../types";
import { debounce } from "../../utils/debounce";
import { getNearestDestinationsAPI } from "../../utils/fake-api";

const DestinationDetails: React.FC<IDestinationDetails> = ({
  inputValue,
  selectedDestination,
  nearestDestinations,
  setNearestDestinations
}) => {
  const [error, setError] = useState("");
  const [dataIsLoading, setDataIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async function () {
      setError("");
      if (selectedDestination) {
        setDataIsLoading(true);

        // @ts-ignore
        const res: IDestination[] | IError = await getNearestDestinationsAPI(
          selectedDestination
        );

        if (res.message) {
          setError(res.message);
          return;
        }
        setNearestDestinations(res);
        setDataIsLoading(false);
      } else {
        setDataIsLoading(false);
      }
    };
    debounce(fetchData, 1000);
  }, [selectedDestination, setNearestDestinations]);

  if (!selectedDestination || inputValue) {
    return null;
  }

  const { name, description, country, climate, currency, latitude, longitude } =
    selectedDestination;

  return (
    <div className="destinationDetails-container">
      <div className="destinationDetails-selectedDestination">
        <h3>{name}</h3>
        <p>Description: {description}</p>
        <p>Country: {country}</p>
        <p>Climate: {climate}</p>
        <p>Currency: {currency}</p>
        <p>
          Coordinates: {latitude}, {longitude}
        </p>
      </div>

      {dataIsLoading && (
        <div className="destinationDetails-loader">
          <Loader />
        </div>
      )}

      {!!error && <h3 className="destinationDetails-error">{error}</h3>}

      {!!nearestDestinations?.length && !error && !dataIsLoading && (
        <div>
          <h3 className="destinationDetails-nearestListTitle">
            Nearest destinations:
          </h3>
          <ul className="destinationDetails-nearestList">
            {nearestDestinations.map((destination) => {
              const {
                id,
                name,
                description,
                country,
                climate,
                currency,
                latitude,
                longitude,
              } = destination;

              return (
                <li key={id}>
                  <h3>{name}</h3>
                  <p>Description: {description}</p>
                  <p>Country: {country}</p>
                  <p>Climate: {climate}</p>
                  <p>Currency: {currency}</p>
                  <p>
                    Coordinates: {latitude}, {longitude}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DestinationDetails;
