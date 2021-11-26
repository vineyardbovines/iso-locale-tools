export enum HourClocks {
  AM_PM = "12hr",
  MILITARY = "24hr",
  MIXED = "mixed",
}

export type HourClock = `${HourClocks}` | HourClocks
