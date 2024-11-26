import { DATALIST } from "./datalist.mjs";

export function clearData(datalist: HTMLDataListElement): void
{
    while (datalist.lastChild !== null) {
        datalist.removeChild(datalist.lastChild);
    }
    while (DATALIST.length > 0) {
        DATALIST.pop();
    }
}
