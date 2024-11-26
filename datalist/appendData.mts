import { Adress, TAdress } from "./Adress.mjs";
import { DATALIST } from "./datalist.mjs";

export function appendData(datalist: HTMLDataListElement, adresses: TAdress[]): void
{
    let index = 0;
    for (const adress of adresses) {
        const data =  Adress.from(adress, index);
        const option = document.createElement("option");
        option.value = data.format;
        DATALIST.push(data);
        datalist.appendChild(option);
        index++;
    }
}
