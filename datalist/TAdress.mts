import { ResultType } from "./ResultType.mjs"

export type TAdress =
{
    name: string,
    country: string,
    state: string,
    postcode: number,
    city: string,
    lat: number,
    lon: number,
    formatted: string,
    result_type: ResultType
}
