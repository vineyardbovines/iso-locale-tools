import { DistanceUnit } from "@locale-tools/localization";

export function convertDistance(
  distance: number,
  fromUnit: DistanceUnit
): number {
  const conversionPoint = fromUnit === "mile" ? 1.609344 : 0.6213712;

  return distance * conversionPoint;
}
