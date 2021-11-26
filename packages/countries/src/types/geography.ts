import { ISO3166_1_Alpha3 } from "./iso-3166-1";

export type Geography = {
  coordinates: { latitude: number, longitude: number };
  isLandlocked: boolean;
  borderCountries: ISO3166_1_Alpha3;
  capitalCity: string[];
  landArea: number;
  region: Regions;
  subregion: Subregions;
};

export enum Regions {
  asia = "Asia",
  europe = "Europe",
  africa = "Africa",
  oceania = "Oceania",
  americas = "Americas",
  antarctic = "Antarctic"
}
export type Region = `${Regions}` | Regions

export enum Subregions {
  southern_asia = "Southern Asia",
  northern_europe = "Northern Europe",
  southeast_europe = "Southeast Europe",
  northern_africa = "Northern Africa",
  polynesia = "Polynesia",
  southern_europe = "Southern Europe",
  middle_africa = "Middle Africa",
  caribbean = "Caribbean",
  south_america = "South America",
  western_asia = "Western Asia",
  australia_new_zealand = "Australia and New Zealand",
  central_europe = "Central Europe",
  eastern_europe = "Eastern Europe",
  western_europe = "Western Europe",
  central_america = "Central America",
  western_africa = "Western Africa",
  north_america = "North America",
  southern_africa = "Southern Africa",
  eastern_africa = "Eastern Africa",
  southeastern_asia = "South-Eastern Asia",
  eastern_asia = "Eastern Asia",
  melanesia = "Melanesia",
  micronesia = "Micronesia",
  central_asia = "Central Asia"
}
export type Subregion = `${Subregions}` | Subregions
