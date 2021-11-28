import { DistanceUnit } from "@locale-tools/localization";

export function convertDistance(
  distance: number,
  fromUnit: DistanceUnit
): number {
  const conversionPoint = fromUnit === "mile" ? 0.6213712 : 1.609344

  return distance * conversionPoint;
}
