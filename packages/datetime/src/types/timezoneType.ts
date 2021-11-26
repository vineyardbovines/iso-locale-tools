export enum TimezoneTypes {
  CANONICAL = "canonical",
  LINK = "link",
}

export type TimezoneType = `${TimezoneTypes}` | TimezoneTypes
