import { toRadians, toDegrees } from "./math";
import { Coordinates } from "../types/coordinates";
import { getRhumbLine } from "./getRhumbLine";

/**
 * bearingDistanceTo - returns the initial bearing from start point to destination point, and the final bearing which differs by varying degrees according to the lat/long
 *
 * @param from - coordinates of the start point
 * @param to - coordinates of the end point
 * @param unit - the unit to return the distance in (km or mi)
 * @param useRhumbLine - whether or not to return the bearing along a rhumb line
 */
export function bearingDistanceTo({
  from,
  to,
  useRhumbLine
}: {
  from: Coordinates;
  to: Coordinates;
  useRhumbLine?: boolean;
}) {
  const { latitude: fromLat, longitude: fromLng } = from;
  const { latitude: toLat, longitude: toLng } = to;

  const φ1: number = toRadians(fromLat);
  const φ2: number = toRadians(toLat);

  const Δλ: number = useRhumbLine
    ? getRhumbLine({ from: fromLng, to: toLng })
    : toRadians(toLng - fromLng);

  let x, y;

  if (useRhumbLine) {
    x = Math.log(
      Math.tan(φ2 / 2 + Math.PI / 4) / Math.tan(φ1 / 2 + Math.PI / 4)
    );
    y = Δλ;
  } else {
    x = Math.sin(Δλ) * Math.cos(φ2);
    y =
      Math.cos(φ1) * Math.sin(φ2) - Math.sin(φ1) * Math.cos(φ2) * Math.cos(Δλ);
  }

  const θ: number = Math.atan2(y, x);

  const initialBearing: number = (toDegrees(θ) + 360) % 360;
  const finalBearing: number = (initialBearing + 180) % 360;

  return {
    initialBearing,
    finalBearing
  };
}
