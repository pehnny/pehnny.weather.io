import { updatePosition } from "../script.mjs";
import { TAdress } from "./Adress.mjs";

export function appendData(datalist: HTMLDataListElement, adresses: TAdress[]): void
{
    for (const adress of adresses) {
        const option = document.createElement("option");
        option.value = `${adress.name}, ${adress.state}, ${adress.country}`;
        option.dataset.name = adress.name;
        option.dataset.lat = String(adress.lat);
        option.dataset.lon = String(adress.lon);
        option.dataset.country = adress.country;
        option.dataset.state = adress.state;
        let duplicate = false;
        for (const city of datalist.children) {
            if (city.dataset.lat === option.dataset.lat && city.dataset.lon === option.dataset.lon) {
                duplicate = true;
            }
        }
        if (duplicate) {
            continue;
        }
        datalist.appendChild(option);
        console.log(option)
        // option.innerHTML = 'tyest'
        const input = document.querySelector("#city-choice")
        input?.addEventListener("input", updatePosition);
    }
}
