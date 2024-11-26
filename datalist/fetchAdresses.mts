import { OPENWEATHERMAP } from "../APIs/keys.mjs";
import { TAdress } from "./Adress.mjs";

export async function fetchAdresses(keyword: string): Promise<TAdress[]>
{
    // const URI = `https://api.api-ninjas.com/v1/geocoding?city=${keyword}&limit=10`;
    const URI = `http://api.openweathermap.org/geo/1.0/direct?q=${keyword}&limit=10&appid=${OPENWEATHERMAP}`
    try {
        // const request = await fetch(URI, {method: "GET", headers: {"X-Api-Key": ninja}});
        const request = await fetch(URI);
        return request.json();
    } catch (error) {
        console.log(error.message);
        return [];
    }
}
