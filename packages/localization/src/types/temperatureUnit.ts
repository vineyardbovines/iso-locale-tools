export enum TemperatureUnits {
  C = "celsius",
  F = "fahrenheit",
}

export type TemperatureUnit = `${TemperatureUnits}` | TemperatureUnits
