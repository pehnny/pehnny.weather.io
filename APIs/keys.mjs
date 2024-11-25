async function fetchAPIKey() {
    try {
        const request = await fetch("./api.json");
        return request.json();
    }
    catch (error) {
        console.log(error.message);
        return { openweathermap: "", geoapify: "" };
    }
}
export const { openweathermap, geoapify } = await fetchAPIKey();
//# sourceMappingURL=keys.mjs.map