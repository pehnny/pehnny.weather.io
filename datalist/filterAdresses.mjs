import { ResultType } from "./ResultType.mjs";
export function filterAdresses(adresses) {
    let adressList = adresses.results;
    if (adressList === undefined) {
        return [];
    }
    adressList = adressList.filter(adress => adress.result_type === ResultType.city);
    if (adressList.length <= 10) {
        return adressList;
    }
    return adressList.slice(0, 10);
}
//# sourceMappingURL=filterAdresses.mjs.map