import React from "react";

import "./styles.scss";

import { IDestination } from "../../types";

const DestinationDetails = ({
  inputValue,
  selectedDestination,
}: {
  inputValue: string;
  selectedDestination: IDestination | null;
}) => {
  if (!selectedDestination || inputValue) {
    return null;
  }

  const { name, description, country, climate, currency, latitude, longitude } =
    selectedDestination;

  return (
    <div className="destinationDetails-container">
      <h3>{name}</h3>
      <p>Description: {description}</p>
      <p>Country: {country}</p>
      <p>Climate: {climate}</p>
      <p>Currency: {currency}</p>
      <p>
        Coordinates: {latitude}, {longitude}
      </p>
    </div>
  );
};

export default DestinationDetails;
