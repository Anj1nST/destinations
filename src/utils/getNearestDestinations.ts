import { IDestination } from "../types";

export function getNearestDestinations(
  destinations: IDestination[],
  selectedDestination: IDestination
) {
  const R = 6371; // Earth's radius in kilometers

  // Calculate the Haversine distance for each destination
  destinations.forEach((destination) => {
    const dLat =
      (destination.latitude - selectedDestination.latitude) * (Math.PI / 180);
    const dLon =
      (destination.longitude - selectedDestination.longitude) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(selectedDestination.latitude * (Math.PI / 180)) *
        Math.cos(destination.latitude * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    destination.distance = distance;
  });

  // Sort the destinations based on distance
  const nearestDestinations = destinations
    .sort((a, b) => (a.distance || 0) - (b.distance || 0))
    .filter((destination) => destination.name !== selectedDestination.name).slice(0, 5);

  return nearestDestinations;
}
