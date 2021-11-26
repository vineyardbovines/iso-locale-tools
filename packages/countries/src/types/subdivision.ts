import { SetOptional } from "type-fest";
import { NameSchema } from "./nameSchema";
import { ISO3166_2 } from "./iso-3166-2";

export type Subdivision = SetOptional<NameSchema, "common"> & {
  iso_3166_2: ISO3166_2;
};
