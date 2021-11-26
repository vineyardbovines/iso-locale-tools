# @iso-locale-tools/navigation

Navigational tools.

## Installation

Install a given package with npm or yarn.

```bash
npm install @iso-locale-tools/countries

yarn add @iso-locale-tools/countries
```

## Usage

### Types

```ts
// coordinates object
type Coordinates = {
  latitude: number;
  longitude: number;
};

enum CompassRose {}
CompassRose.CARDINAL; // "cardinal"

enum CardinalDirections {}
CardinalDirections.W; // "W"

enum CelestialDirections {}
CelstialDirections.SEBS; // "SEbS"

enum ClassicalDirections {}
ClassicalDirections.WNW; // "WNW"

enum MarinerDirections {}
MarinerDirections.SE; // "SE"

enum CompassPoints {
  CARDINAL = 4,
  MARINER = 8,
  CLASSICAL = 12,
  CELESTIAL = 32
}
```

### Methods

#### `bearingToDirection(bearing: number): Windrose`

Converts a bearing to a given compass direction. Throws an error if bearing is not between 0 and 360.

| Parameter     | Type          | Description                     | Default                 |
| ------------- | ------------- | ------------------------------- | ----------------------- |
| bearing       | `number`      | Bearing to convert              | **Required**            |
| compassPoints | `CompassRose` | Number of compass points to use | `CompassRose.CLASSICAL` |

```ts
import { bearingToDirection, CompassRose } from "iso-locale-tools";

const bearing = 243.62;

const windrose4Direction = bearingToDirection(bearing); // W

const windrose8Direction = bearingToDirection(bearing, CompassRose.MARINER); // SW

const windrose16Direction = bearingToDirection(bearing, CompassRose.CLASSICAL); // WSW

const windrose32Direction = bearingToDirection(bearing, CompassRose.CELESTIAL); // SWbW
```

#### getCenterOfCoordinates(coordinates: Coordinates[]): Coordinates`

Returns the coordinate center of a list of coordinates.

| Parameters  | Type            | Description               | Default      |
| ----------- | --------------- | ------------------------- | ------------ |
| coordinates | `Coordinates[]` | List of coordinate objets | **Required** |

```ts
import { getCenterOfCoordinates } from "iso-locale-tools";

const center = getCenterOfCoordinates([
  { latitude: 12.5, longitude: -69.9 },
  { latitude: 52.5, longitude: 5.75 }
]);
// returns { latitude: 38.44160133305245, longitude: -42.280221828555504 }
```

#### getRhumbLine({ from, to }): number`

Returns a [rhumb line](https://en.wikipedia.org/wiki/Rhumb_line) between 2 longitudes (meridians).

| Parameters | Type     | Description        | Default      |
| ---------- | -------- | ------------------ | ------------ |
| from       | `number` | starting longitude | **Required** |
| to         | `number` | ending longitude   | **Required** |

```ts
import { getRhumbLine } from "iso-locale-tools";

const rhumbLine = getRhumbLine({from: -69.9, to: 5.75});
// returns 1.3203415791337105
```

#### geographicDistanceTo({ from, to, unit, useRhumbLine }): number`

Returns the [great-circle distance](https://en.wikipedia.org/wiki/Great-circle_distance) between 2 points using the [haversine formula](https://en.wikipedia.org/wiki/Versine#hav).

| Parameters   | Type           | Description                            | Default      |
| ------------ | -------------- | -------------------------------------- | ------------ |
| from         | `Coordinates`  | starting coordinates                   | **Required** |
| to           | `Coordinates`  | destination coordinates                | **Required** |
| unit         | `DistanceUnit` | unit of measurement to get distance in | `kilometer`  |
| useRhumbLine | `boolean`      | whether or not to use a rhumb line     | `false`      |

```ts
import { geographicDistanceTo } from "iso-locale-tools";

const distance = geographicDistanceTo({
  from: location1,
  to: location2,
  unit: "mile"
});
// returns 12792.535602738117

const distanceUsingRhumbLine = geographicDistanceTo({
  from: location1,
  to: location2,
  unit: "kilometer",
  useRhumbLine: true
});
// returns 8156.327629644782
```

#### bearingDistanceTo({ from, to, useRhumbLine }): { initialBearing: number, finalBearing: number})`

Returns the initial bearing from start point to the destination point and the final bearing which differs by varying degrees according to the latitude/longitude.

| Parameters   | Type          | Description                        | Default      |
| ------------ | ------------- | ---------------------------------- | ------------ |
| from         | `Coordinates` | starting coordinates               | **Required** |
| to           | `Coordinates` | destination coordinates            | **Required** |
| useRhumbLine | `boolean`     | whether or not to use a rhumb line | `false`      |

```ts
import { bearingDistanceTo } from "iso-locale-tools";

const bearing = bearingDistanceTo({ from: location1, to: location2 });
// returns { initialBearing: 51.51700060782139, finalBearing: 231.5170006078214 }

const bearingUsingRhumbLine = bearingDistanceTo({
  from: location1,
  to: location2,
  useRhumbLine: true
});
// returns { initialBearing: 56.90674499795489, finalBearing: 236.9067449979549 }
```

