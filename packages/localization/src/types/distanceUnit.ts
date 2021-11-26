export enum DistanceUnits {
  KM = "kilometer",
  MI = "mile",
}

export type DistanceUnit = `${DistanceUnits}` | DistanceUnits
