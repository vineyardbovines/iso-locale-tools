import { toDegrees, toRadians } from "./math";
import { Coordinates } from "../types/coordinates";

/**
 * getCenterOfCoordinates - get the latitude and longitude center of an array of coordinates
 *
 * @param coordinates - list of coordinate objects
 * @returns
 */
export function getCenterOfCoordinates(
  coordinates: Coordinates[]
): Coordinates {
  let x: number = 0.0;
  let y: number = 0.0;
  let z: number = 0.0;

  coordinates.forEach(coords => {
    const lat = toRadians(coords.latitude);
    const lng = toRadians(coords.longitude);

    x += Math.cos(lat) * Math.cos(lng);
    y += Math.cos(lat) * Math.sin(lng);
    z += Math.sin(lat);
  });

  x /= coordinates.length;
  y /= coordinates.length;
  z /= coordinates.length;

  const lng: number = Math.atan2(y, x);
  const hyp: number = Math.sqrt(x * x + y * y);
  const lat: number = Math.atan2(z, hyp);

  return {
    latitude: toDegrees(lat),
    longitude: toDegrees(lng)
  };
}
