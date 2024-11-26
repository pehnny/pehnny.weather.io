import { TKeys } from "./TKeys.mjs";

async function fetchAPIKey(): Promise<TKeys>
{
    try {
        const request = await fetch("./api.json");
        return request.json();
    } catch (error) {
        console.log(error.message);
        return {openweathermap: "", geoapify: "", ninja: ""};
    }
}

export const {openweathermap: OPENWEATHERMAP, geoapify: GEOAPIFY, ninja: NINJA} = await fetchAPIKey();
