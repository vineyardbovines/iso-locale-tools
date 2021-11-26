import { Timezones } from "./tzDatabaseTimezones";
import { TimezoneType } from "./timezoneType";

export type Timezone = {
  name: Timezones[];
  type: TimezoneType;
  linkedTo: string | null;
  utcOffset: string;
  dstOffset: string;
};
