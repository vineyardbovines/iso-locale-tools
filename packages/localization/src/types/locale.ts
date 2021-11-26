import { IETF } from "@locale-tools/languages";
import { Timezones, Timezone, HourClock, WeekStartDay } from "@locale-tools/datetime"
import { DrivingSide } from "./drivingSide";
import { MeasurementSystem } from "./measurementSystem";
import { TemperatureUnit } from "./temperatureUnit";
import { DistanceUnit } from "./distanceUnit";

export type Locale = {
  ietf: IETF[];
  drivingSide: DrivingSide;
  measurementSystem: MeasurementSystem;
  hourClock: HourClock;
  timezones: Timezone[] | Timezones[];
  dateFormats: {
    [key in IETF]: string;
  };
  weekStartsOn: WeekStartDay;
  distanceUnit: DistanceUnit;
  temperatureUnit: TemperatureUnit;
};
