import { IDestination } from "../../types";

export interface IAutoSuggest {
  destinations: IDestination[];
  setDestinations: React.Dispatch<IDestination[]>;
  inputValue: string;
  setInputValue: React.Dispatch<string>;
  setSelectedDestination: React.Dispatch<IDestination | null>;
  selectedDestination: IDestination | null;
  setNearestDestinations: React.Dispatch<IDestination[]>;
}
