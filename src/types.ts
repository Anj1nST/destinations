export interface IDestination {
  id: number;
  name: string;
  description: string;
  country: string;
  climate: string;
  currency: string;
  latitude: number;
  longitude: number;
  distance?: number;
}

export interface IError {
    message?: string;
}