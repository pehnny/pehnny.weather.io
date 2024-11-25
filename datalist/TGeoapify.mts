import { TAdress } from "./TAdress.mjs"
import { TQuery } from "./TQuery.mjs"

export type TGeoapify =
{
    query?: TQuery,
    results?: TAdress[]
}
