export enum MeasurementSystems {
  METRIC = "metric",
  IMPERIAL = "imperial",
}

export type MeasurementSystem = `${MeasurementSystems}` | MeasurementSystems
