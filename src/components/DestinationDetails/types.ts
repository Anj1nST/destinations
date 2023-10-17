import { IDestination } from "../../types";

export interface IDestinationDetails {
  inputValue: string;
  selectedDestination: IDestination | null;
  nearestDestinations: IDestination[]
  setNearestDestinations: React.Dispatch<IDestination[]>
}
