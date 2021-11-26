import { utcToZonedTime, zonedTimeToUtc, format, toDate } from "date-fns-tz";
import { addHours, parseISO, subHours } from "date-fns";
import { Timezone } from "../types/timezone";

function getNow(date?: Date | number | string) {
  if (!date) return +new Date();
  if (typeof date === "string") return parseISO(date);
  return Number(date);
}

/**
 * getDateTimeForTimezone - get a date converted for a given timezone
 *
 * @param date - the date to convert
 * @param timezone - the timezone to convert to
 * @param serverTimezone - the 'server' timezone to convert against, defaults to UTC
 */
export function getDateTimeForTimezone({
  date,
  timezone,
  serverTimezone
}: {
  date?: Date | number | string;
  dateTimeFormat: string;
  timezone: keyof Timezone;
  serverTimezone?: string;
}) {
  const now = getNow(date);
  const serverTz = serverTimezone ?? "UTC";

  const localNow: Date =
    serverTz === "UTC"
      ? utcToZonedTime(now, timezone)
      : zonedTimeToUtc(now, serverTz);

  const formattedNow: string = format(localNow, "yyyy-MM-dd HH:mm:ss zzz", {
    timeZone: timezone
  });

  const nowToDate = toDate(formattedNow, { timeZone: timezone });

  // date-fns-tz doesnt handle ETC timezones correctly
  if (timezone.includes("ETC")) {
    const offsetHours = Number(timezone.split("-")[0]);
    if (timezone.includes("ETC/+")) {
      // ETC +/- symbols are intentionally reversed
      return subHours(nowToDate, offsetHours);
    } else {
      return addHours(nowToDate, offsetHours);
    }
  }

  return nowToDate;
}
