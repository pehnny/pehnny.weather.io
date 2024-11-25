import { TKeys } from "./TKeys.mjs";

async function fetchAPIKey(): Promise<TKeys>
{
    try {
        const request = await fetch("./api.json");
        return request.json();
    } catch (error) {
        console.log(error.message);
        return {openweathermap: "", geoapify: ""};
    }
}

export const {openweathermap, geoapify} = await fetchAPIKey();
