import { CompassPoints, Windrose, Windrose32Directions } from "../types/compass";

/**
 * getWindroseDirections - returns an array of directions for a given number of compass points
 *
 * @param compassPoints - the number of compass points to get directions for
 */
export function getWindroseDirections(
  compassPoints: CompassPoints
): Windrose[] {
  const windrose = Object.values(Windrose32Directions);

  if (compassPoints === 32) {
    return windrose;
  }

  const n: number = windrose.length / compassPoints;

  return windrose.filter((_, index) => index % n === 0);
}
