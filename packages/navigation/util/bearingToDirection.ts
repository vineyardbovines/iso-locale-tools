import { Windrose, CompassPoints } from "../types/compass";
import { getWindroseDirections } from "./getWindroseDirections";

export type DirectionThreshold = {
  direction?: Windrose;
  threshold: number;
  previousThreshold?: number;
};

/**
 * bearingToDirection - converts a bearing to a given direction
 *
 * @param bearing - a numeric bearing point
 * @param compassPoints - [optional] the number of compass points to use (defaults to 16)
 */
export function bearingToDirection(
  bearing: number,
  compassPoints: CompassPoints = 16
): Windrose | Error {
  if (bearing < 0 || bearing > 360) {
    throw new Error("[bearingToDirection]: bearing must be between 0 and 360.");
  }

  const directions: string[] = getWindroseDirections(compassPoints);

  const threshold: number = 360 / (compassPoints * 2);

  let directionsWithThresholds: DirectionThreshold[] = [];

  for (let i = 0; i < 360; i += threshold) {
    i += threshold;
    directionsWithThresholds.push({ threshold: i });
  }

  directions.forEach((direction: string, idx: number): void => {
    directionsWithThresholds[idx] = {
      ...directionsWithThresholds[idx],
      previousThreshold:
        idx === 0 ? 0 : directionsWithThresholds[idx - 1].threshold,
      direction: direction as Windrose
    };
  });

  const match: DirectionThreshold | undefined = directionsWithThresholds.find(
    ({
      previousThreshold,
      threshold
    }: Omit<DirectionThreshold, "direction">): boolean =>
      bearing > previousThreshold! && bearing <= threshold!
  );

  return match!.direction as Windrose;
}
