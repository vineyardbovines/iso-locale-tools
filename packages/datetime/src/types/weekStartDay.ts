export enum WeekStartDays {
  FRIDAY = "friday",
  SATURDAY = "saturday",
  SUNDAY = "sunday",
  MONDAY = "monday",
}

export type WeekStartDay = `${WeekStartDays}` | WeekStartDays
