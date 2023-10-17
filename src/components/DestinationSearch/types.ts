import { IDestination } from "../../types";

export interface IDestinationSearch {
  inputValue: string;
  setInputValue: React.Dispatch<string>;
  setSelectedDestination: React.Dispatch<any>;
  selectedDestination: IDestination | null;
  destinations: IDestination[];
  setDestinations: React.Dispatch<IDestination[]>;
  setNearestDestinations: React.Dispatch<IDestination[]>;
}
