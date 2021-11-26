export function toRadians(num: number): number {
  return (Math.PI * num) / 180;
}

export function toDegrees(num: number): number {
  return (180 * num) / Math.PI;
}

export function round(num: string | number, places: number = 2): number {
  const value: number = typeof num === "string" ? Number(num) : num;
  const multiplier: number = Math.pow(10, places);

  return Math.round(value * multiplier) / multiplier;
}

export function toPercent(
  num: number,
  { appendSymbol }: { appendSymbol: boolean }
): string {
  const value: number = typeof num === "string" ? Number(num) : num;
  const percentage: string = Number(value * 100).toFixed();

  return appendSymbol ? `${percentage}%` : percentage;
}
