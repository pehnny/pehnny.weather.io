import { ResultType } from "./ResultType.mjs";
import { TAdress } from "./TAdress.mjs";
import { TGeoapify } from "./TGeoapify.mjs";

export function filterAdresses(adresses: TGeoapify): TAdress[]
{
    let adressList = adresses.results;
    if (adressList === undefined) {
        return [];
    }
    adressList = adressList.filter(adress => adress.result_type === ResultType.city);
    if (adressList.length <= 10) {
        return adressList
    }
    return adressList.slice(0,10)
}
