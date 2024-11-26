import { OPENWEATHERMAP } from "./APIs/keys.mjs";
import { Adress } from "./datalist/Adress.mjs";
import { appendData } from "./datalist/appendData.mjs";
import { clearData } from "./datalist/clearData.mjs";
import { DATALIST } from "./datalist/datalist.mjs";
import { fetchAdresses } from "./datalist/fetchAdresses.mjs";

async function autocomplete(this: HTMLInputElement, ev: Event): Promise<void>
{
    const datalist = document.querySelector<HTMLDataListElement>("#city-list");
    if (datalist === null) {
        return;
    }
    const keyword: string = this.value;
    if (keyword.length < 3) {
        return;
    }
    clearData(datalist);
    const adresses = await fetchAdresses(keyword);
    if (adresses.length < 1) {
        return;
    }
    appendData(datalist, adresses);
}

const input = document.querySelector<HTMLInputElement>("#city-choice");
if (input !== null) {
    input.addEventListener("change", autocomplete);
}

async function displayTemperature(this: HTMLButtonElement, ev: MouseEvent): Promise<void>
{
    console.log("hello");
    if (ev.button !== 0) {
        console.log("bye");
        return;
    }
    const input = document.querySelector<HTMLInputElement>("#city-choice");
    if (input === null) {
        return;
    }
    let adress: Adress | null = null;
    for (const data of DATALIST) {
        if (data.format === input.value) {
            adress = data;
        }
    }
    if (adress === null) {
        return;
    }
    // ne marche pas car l'event "change" réagit quand on autocomplète, ce qui vide la liste, fetch à nouveau et ne renvoie rien car ce n'est plus le nom d'une ville.
    const {lat, lon} = adress;
    const weathers = await fetchWeather(lat, lon);
    console.log(weathers);
}

const button = document.querySelector<HTMLButtonElement>("#city-submit");
if (button !== null) {
    button.addEventListener("click", displayTemperature);
}
async function fetchWeather(lat: number, lon: number): Promise<[]>
{
    const URI = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP}`
    try {
        const request = await fetch(URI);
        return request.json();
    } catch (error) {
        console.error(error.message)
        return [];
    }
}

