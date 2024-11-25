import { TAdress } from "./TAdress.mjs";

export function appendData(datalist: HTMLDataListElement, adresses: TAdress[]): void
{
    for (const adress of adresses) {
        const option = document.createElement("option");
        option.value = adress.formatted;
        datalist.appendChild(option);
    }
}
