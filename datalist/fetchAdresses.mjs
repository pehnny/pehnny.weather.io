import { geoapify } from "../APIs/keys.mjs";
export async function fetchAdresses(keyword) {
    const API = "https://api.geoapify.com/v1/geocode/autocomplete?";
    const parameters = [
        `text=${keyword}`,
        "type=city",
        "format=json",
        "lang=fr",
        `apiKey=${geoapify}`
    ];
    const URI = API + parameters.join("&");
    try {
        const request = await fetch(URI);
        return request.json();
    }
    catch (error) {
        console.log(error.message);
        return {};
    }
}
//# sourceMappingURL=fetchAdresses.mjs.map