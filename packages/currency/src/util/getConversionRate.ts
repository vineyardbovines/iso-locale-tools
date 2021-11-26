import axios, { AxiosResponse } from "axios";
import { ISO4217 } from "../types/iso-4217";

/**
 * getConversionRate - gets the conversion rate from 1 currency to another
 *
 * @param from - the ISO4217 currency code to convert from
 * @param to - the ISO4217 currency code to convert to
 */
export function getConversionRate({
  from,
  to
}: {
  from: ISO4217;
  to: ISO4217;
}): Promise<number | Error> {
  const currencyKey: string = `${from}_${to}`;

  const url: string = `https://free.currconv.com/api/v7/convert?q=${currencyKey}&compact=ultra&apiKey=b3b5e0c76d0bceb10920`;

  return axios
    .get(url)
    .then(
      ({ data }: AxiosResponse<{ [key: typeof currencyKey]: number }>) =>
        data[currencyKey]
    )
    .catch((err: Error) => err);
}
