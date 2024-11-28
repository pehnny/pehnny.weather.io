import { OPENWEATHERMAP } from "./APIs/keys.mjs";
import { TAdress } from "./datalist/Adress.mjs";
import { appendData } from "./datalist/appendData.mjs";
import { clearData } from "./datalist/clearData.mjs";
import { DATALIST } from "./datalist/datalist.mjs";
import { fetchAdresses } from "./datalist/fetchAdresses.mjs";

type TPosition = {lat?: number, lon?: number};
let POSITION: TPosition = {};
console.log(POSITION);

async function autocomplete(this: HTMLInputElement, ev: KeyboardEvent): Promise<void>
{
    const datalist = document.querySelector<HTMLDataListElement>("#city-list");
    if (datalist === null) {
        return;
    }
    const keyword: string = this.value;
    if (keyword.length < 3) {
        return;
    }
    // TODO Clear options
    // clearData(datalist);
    // Fetch adresses
    const adresses = await fetchAdresses(keyword);
    if (adresses.length < 1) {
        return;
    }
    // Store data in options and return them
    appendData(datalist, adresses);
    // TODO Preselect first option
    const first = datalist.firstChild;
    if (first === null) {
        return;
    }
    POSITION.lat = first.dataset.lat;
    POSITION.lon = first.dataset.lon;
    console.log(POSITION);
    // TODO Listen to each options
    const options = datalist.children;
    for (const option of options) {
        // console.log(option)
    }
}

export function updatePosition(this: Element, ev: Event): void
{
    console.log("hello");
    const lat = this.dataset.lat;
    const lon = this.dataset.lon;
    if (lat !== undefined) {
        POSITION.lat = parseFloat(lat);
    }
    if (lon !== undefined) {
        POSITION.lon = parseFloat(lon);
    }
    console.log(POSITION);
}
const input = document.querySelector<HTMLInputElement>("#city-choice");
if (input !== null) {
    // TODO Consider to create different type of event to prevent deleting options early
    input.addEventListener("keyup", autocomplete);
}

// async function displayTemperature(this: HTMLButtonElement, ev: MouseEvent): Promise<void>
// {
//     console.log("hello");
//     if (ev.button !== 0) {
//         console.log("bye");
//         return;
//     }
//     const input = document.querySelector<HTMLInputElement>("#city-choice");
//     if (input === null) {
//         return;
//     }
//     let adress: Adress | null = null;
//     for (const data of DATALIST) {
//         if (data.format === input.value) {
//             adress = data;
//         }
//     }
//     if (adress === null) {
//         return;
//     }
//     // ne marche pas car l'event "change" réagit quand on autocomplète, ce qui vide la liste, fetch à nouveau et ne renvoie rien car ce n'est plus le nom d'une ville.
//     const {lat, lon} = adress;
//     const weathers = await fetchWeather(lat, lon);
//     console.log(weathers);
// }

// const button = document.querySelector<HTMLButtonElement>("#city-submit");
// if (button !== null) {
//     button.addEventListener("click", displayTemperature);
// }
// async function fetchWeather(lat: number, lon: number): Promise<[]>
// {
//     const URI = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP}`
//     try {
//         const request = await fetch(URI);
//         return request.json();
//     } catch (error) {
//         console.error(error.message)
//         return [];
//     }
// }

