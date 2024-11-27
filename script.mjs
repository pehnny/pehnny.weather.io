import { OPENWEATHERMAP } from "./APIs/keys.mjs";
import { appendData } from "./datalist/appendData.mjs";
import { DATALIST } from "./datalist/datalist.mjs";
import { fetchAdresses } from "./datalist/fetchAdresses.mjs";
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
    const options = datalist.children;
    // TODO Preselect first option
    // TODO Listen to each options
}
const input = document.querySelector("#city-choice");
if (input !== null) {
    // TODO Consider to create different type of event to prevent deleting options early
    input.addEventListener("change", autocomplete);
}
async function displayTemperature(ev) {
    console.log("hello");
    if (ev.button !== 0) {
        console.log("bye");
        return;
    }
    const input = document.querySelector("#city-choice");
    if (input === null) {
        return;
    }
    let adress = null;
    for (const data of DATALIST) {
        if (data.format === input.value) {
            adress = data;
        }
    }
    if (adress === null) {
        return;
    }
    // ne marche pas car l'event "change" réagit quand on autocomplète, ce qui vide la liste, fetch à nouveau et ne renvoie rien car ce n'est plus le nom d'une ville.
    const { lat, lon } = adress;
    const weathers = await fetchWeather(lat, lon);
    console.log(weathers);
}
const button = document.querySelector("#city-submit");
if (button !== null) {
    button.addEventListener("click", displayTemperature);
}
async function fetchWeather(lat, lon) {
    const URI = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${OPENWEATHERMAP}`;
    try {
        const request = await fetch(URI);
        return request.json();
    }
    catch (error) {
        console.error(error.message);
        return [];
    }
}
//# sourceMappingURL=script.mjs.map