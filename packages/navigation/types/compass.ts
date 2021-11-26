export enum CompassPointsByName {
  CARDINAL = 4,
  MARINER = 8,
  CLASSICAL = 16,
  CELESTIAL = 32,
}
export type CompassPointNums = 4 | 8 | 16 | 32
export type CompassPoints = CompassPointsByName | CompassPointNums

export enum CompassRoseNames {
  CARDINAL = "cardinal",
  MARINER = "mariner",
  CLASSICAL = "classical",
  CELESTIAL = "celestial",
}

export type CompassRoseType = `${CompassRoseNames}`;

export type CompassRose = CompassRoseNames | CompassRoseType;

export enum Windrose32Directions {
  N = "N",
  NBE = "NbE",
  NNE = "NNE",
  NEBN = "NEbN",
  NE = "NE",
  NEBE = "NEbE",
  ENE = "ENE",
  EBN = "EbN",
  E = "E",
  EBS = "EbS",
  ESE = "ESE",
  SEBE = "SEbE",
  SE = "SE",
  SEBS = "SEbS",
  SSE = "SSE",
  SBE = "SbE",
  S = "S",
  SBW = "SbW",
  SSW = "SSW",
  SWBS = "SWbS",
  SW = "SW",
  SWBW = "SWbW",
  WSW = "WSW",
  WBS = "WbS",
  W = "W",
  WBN = "WbN",
  WNW = "WNW",
  NWBW = "NWbW",
  NW = "NW",
  NWBN = "NWbN",
  NNW = "NNW",
  NBW = "NbW",
}
export type Windrose32 = `${Windrose32Directions}` | Windrose32Directions

export enum Windrose16Directions {
  N = Windrose32Directions.N,
  NNE = Windrose32Directions.NNE,
  NE = Windrose32Directions.NE,
  ENE = Windrose32Directions.ENE,
  E = Windrose32Directions.E,
  ESE = Windrose32Directions.ESE,
  SE = Windrose32Directions.SE,
  SSE = Windrose32Directions.SSE,
  S = Windrose32Directions.S,
  SSW = Windrose32Directions.SSW,
  SW = Windrose32Directions.SW,
  WSW = Windrose32Directions.WSW,
  W = Windrose32Directions.W,
  WNW = Windrose32Directions.WNW,
  NW = Windrose32Directions.NW,
  NNW = Windrose32Directions.NNW,
}
export type Windrose16 = `${Windrose16Directions}` | Windrose16Directions

export enum Windrose8Directions {
  N = Windrose32Directions.N,
  NE = Windrose32Directions.NE,
  E = Windrose32Directions.E,
  SE = Windrose32Directions.SE,
  S = Windrose32Directions.S,
  SW = Windrose32Directions.SW,
  W = Windrose32Directions.W,
  NW = Windrose32Directions.NW,
}
export type Windrose8 = `${Windrose8Directions}` | Windrose8Directions

export enum Windrose4Directions {
  N = Windrose32Directions.N,
  E = Windrose32Directions.E,
  S = Windrose32Directions.S,
  W = Windrose32Directions.W,
}
export type Windrose4 = `${Windrose4Directions}` | Windrose4Directions

export type Windrose = `${Windrose32}` | Windrose32Directions
