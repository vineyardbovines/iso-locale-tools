import { toRadians } from "./math";

/**
 * getRhumbLine - get the rhumb line between 2 longitudes
 * a rhumb line is an arc that crosses all meridiens of longitude at the same angle, i.e. bearing is measured relative to true north
 *
 * @param from - the starting longitude
 * @param to - the ending longitude
 */
export function getRhumbLine({ from, to }: { [key: string]: number }): number {
  const longitudeRadiansDiff = toRadians(Math.abs(to - from));

  // if longtude diff is over 180, take rhumb line across anti-meridien
  if (Math.abs(longitudeRadiansDiff) > Math.PI) {
    return longitudeRadiansDiff > 0
      ? -(2 * Math.PI - longitudeRadiansDiff)
      : 2 * Math.PI + longitudeRadiansDiff;
  }

  return longitudeRadiansDiff;
}
