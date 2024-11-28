import { appendData } from "./datalist/appendData.mjs";
import { fetchAdresses } from "./datalist/fetchAdresses.mjs";
let POSITION = {};
console.log(POSITION);
async function autocomplete(ev) {
    const datalist = document.querySelector("#city-list");
    if (datalist === null) {
        return;
    }
    const keyword = this.value;
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
export function updatePosition(ev) {
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
const input = document.querySelector("#city-choice");
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
//# sourceMappingURL=script.mjs.map